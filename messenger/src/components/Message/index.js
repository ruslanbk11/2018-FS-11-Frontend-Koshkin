import React, { Component } from 'react'
import './styles.css'

class Message extends Component {
  constructor(props){
    super(props)

    this.state = {
        isMy: props.defaultMy,
        time: (new Date()).toLocaleString('ru', this.options),
    }
  }

  options = {
      hour: 'numeric',
      minute: 'numeric'
  };

  render () {
      const message = this.props.message
      const content = message.content
      const author = this.state.isMy || <section className='author'>{message.author}</section>
      const message_class = this.state.isMy ? 'my_message' : 'not_my_message'
      return (
          <div className={message_class}>
              {author}
              <section className='content'>{message.text}</section>
              {content}
              <div className='time'>{this.state.time}</div>
          </div>
      )
  }
}

export default Message
