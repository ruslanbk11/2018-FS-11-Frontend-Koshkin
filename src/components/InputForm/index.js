import React, { Component } from 'react'
import styles from './InputForm.css'
import EmojiBar from '../EmojiBar'
import { connect } from 'react-redux'

const options = {
    hour: 'numeric',
    minute: 'numeric'
};

class InputForm extends Component{
  constructor(props){
    super(props)

    this.state = {
      withMessage: true,
      count: 0,
      value: ''
    }

  }

  options = {
      hour: 'numeric',
      minute: 'numeric'
  };


  render () {
    const input_class = this.state.withMessage ? styles.input_with_message : styles.input_without
    const input = <input type='text' id='input' className={input_class} placeholder='Введите сообщение'/>
    const sendElement = (
      <label className={styles.send}>
        <button onClick={this.props.onInput} className={styles.sendImg} alt='send'/>
      </label>
    )
    console.log(input_class)
    const send = this.state.withMessage && sendElement;
    return (
      <form className={styles.form} onSubmit={this.props.onInput}>
        <EmojiBar />
        {input}
        <label className={styles.attach} >
          <label className={styles.invisible}>
            <input type='file' onChange={this.props.onFileInput} multiple />
          </label>
          <button className={styles.attachImg} alt='attach' />
        </label>
        {send}
      </form>
    )
  }
}

// const mapStateToProps = (state) => {
//
// }

const mapDispatchToProps = (dispatch) => {
  return {
    onInput: (event) => {
      event.preventDefault()
      var input = document.getElementById('input')
      if (input.value !== ''){
      dispatch({
        type: 'SEND_MESSAGE',
        payload: {
          id: new Date(),
          author: 'Me',
          text: input.value,
          content: null,
          time: (new Date()).toLocaleString('ru', options)
        }
      })}
      input.value = ''
    },
    onFileInput: (event) => {
      const files = event.target.files
      const f = []
      for (let i = 0; i< files.length; i++) {
        let file = files[i]
        console.log(URL.createObjectURL(file))
        if (file.type === ('image/png') || file.type === ('image/jpeg') || file.type === ('image/gif')) {
          f.push(<img key={new Date()} src={URL.createObjectURL(file)} alt='attached_img'/>)
        } else {
          f.push(<a key={new Date()} href={URL.createObjectURL(file)}>{file.name}</a>)
        }
      }
      dispatch({
        type: 'SEND_MESSAGE',
        payload: {
          id: new Date(),
          author: "Me",
          content: f,
          text: '',
          time: (new Date()).toLocaleString('ru', options)
        }
      })
    }
  }
}



export default connect(null, mapDispatchToProps)(InputForm)
