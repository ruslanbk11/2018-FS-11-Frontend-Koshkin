import React, { Component } from 'react'
import styles from './InputForm.css'
import EmojiBar from '../EmojiBar'
import { connect } from 'react-redux'

const options = {
    hour: 'numeric',
    minute: 'numeric'
};

class InputForm extends Component{

  options = {
      hour: 'numeric',
      minute: 'numeric'
  };

  render () {
    const input = <input type='text' id='input' className={styles.input_with_message}  placeholder='Введите сообщение'/>
    const sendElement = (
      <label className={styles.send}>
        <button onClick={this.props.onInput} className={styles.sendImg} alt='send'/>
      </label>
    )
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
        {sendElement}
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInput: (event) => {
      event.preventDefault()
      let input = document.getElementById('input')
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
      let files = event.target.files
      let f = []
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
