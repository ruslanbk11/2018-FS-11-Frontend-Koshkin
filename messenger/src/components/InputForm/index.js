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

  newMessage = {
    id: '',
    author: "Me",
    text: '',
    time: ''
  }

  render () {
    const onNewMessage = this.props.onNewMessage
    const input_class = this.state.withMessage ? 'input_with_message' : 'input_without'
    const input = <input type='text' id='input' className={input_class} onInput={this.handleInput} placeholder='Введите сообщение'/>
    const sendElement = (
      <div onClick={this.handleClick} className='send'>
        <img onClick={onNewMessage.bind(this, this.newMessage)} src={sendImg} className='sendImg' alt='send'/>
      </div>
    )
    const send = this.state.withMessage && sendElement
    return (
      <form className='form'>
        {input}
        <label className='attach' onClick={onNewMessage.bind(this, this.newMessage)}>
          <label className='invisible'>
            <input type='file' onSubmit={this.handleSubmit} onChange={this.handleAttach} multiple />
          </label>
          <img src={attachImg} className='attachImg' alt='attach' />
        </label>
        {send}
      </form>
    )
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  handleAttach = (input) => {
    const files = input.target.files
    this.files = []
    for (let i = 0; i< files.length; i++) {
      let file = files[i]
      if (file.type === ('image/png') || file.type === ('image/jpeg') || file.type === ('image/gif')) {
        this.files.push(<img src={URL.createObjectURL(file)} alt='attached_img'/>)
      } else {
        this.files.push(<a href={URL.createObjectURL(file)}>{file.name}</a>)
      }
    }
    this.newMessage = {
      id: this.state.count,
      author: "Me",
      content: this.files,
      text: '',
      time: (new Date()).toLocaleString('ru', this.options)
    }
    console.log(this.files)
    this.props.onNewMessage.bind(this, this.newMessage)
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
    this.newMessage = {
      id: this.state.count,
      author: "Me",
      text: input.value,
      time: (new Date()).toLocaleString('ru', this.options)
    }

  }
}

export default InputForm
