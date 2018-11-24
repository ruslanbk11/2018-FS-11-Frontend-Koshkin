import React, { Component } from 'react'
import './styles.css'
import attachImg from '../../static/attachment_24_px.png'
import sendImg from '../../static/send_24_px.png'

class InputForm extends Component{
  constructor(props){
    super(props)

    this.state = {
      withMessage: false,
      count: 0,
      value: ''
    }

  }

  options = {
      hour: 'numeric',
      minute: 'numeric'
  };

  handleAttach = (event) => {
    const files = event.target.files
    this.files = []
    for (let i = 0; i< files.length; i++) {
      let file = files[i]
      if (file.type === ('image/png') || file.type === ('image/jpeg') || file.type === ('image/gif')) {
        this.files.push(<img key={this.state.count + i} src={URL.createObjectURL(file)} alt='attached_img'/>)
      } else {
        this.files.push(<a key={this.state.count + i} href={URL.createObjectURL(file)}>{file.name}</a>)
      }
    }
    let newMessage = {
      id: this.state.count,
      author: "Me",
      content: this.files,
      text: '',
      time: (new Date()).toLocaleString('ru', this.options)
    }
    console.log(this.files)
    this.props.onNewMessage(newMessage);
    this.setState({
      count: this.state.count + 1 + files.length
    })
  }

  handleClick = () => {
    this.setState({
      withMessage: false,
      count: this.state.count + 1
    })
  }

  handleInput = () => {
    var input = document.getElementById('input')
    if (input.value.length > 0){
      this.setState({
        withMessage: true
      })
    } else {
      this.setState({
        withMessage: false
      })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    var input = document.getElementById('input')
    const newMessage = {
      id: this.state.count,
      author: "Me",
      text: input.value,
      time: (new Date()).toLocaleString('ru', this.options)
    }
    this.props.onNewMessage(newMessage);
    this.setState({
      withMessage: false,
      count: this.state.count + 1
    })
  }

  render () {
    const input_class = this.state.withMessage ? 'input_with_message' : 'input_without'
    const input = <input type='text' id='input' className={input_class} onInput={this.handleInput} placeholder='Введите сообщение'/>
    const sendElement = (
      <div onClick={this.handleClick} className='send'>
        <img onClick={this.handleSubmit} src={sendImg} className='sendImg' alt='send'/>
      </div>
    )
    const send = this.state.withMessage && sendElement
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        {input}
        <label className='attach' >
          <label className='invisible'>
            <input type='file' onChange={this.handleAttach} multiple />
          </label>
          <img src={attachImg} className='attachImg' alt='attach' />
        </label>
        {send}
      </form>
    )
  }
}

export default InputForm
