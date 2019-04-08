import React, { Component } from 'react'
import styles from './Message.css'

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
      const message_class = this.state.isMy ? styles.my_message : styles.not_my_message
      return (
          <div className={message_class}>
              {author}
              <section className={styles.content}>{message.text}</section>
              {content}
              <div className={styles.time}>{this.state.time}</div>
          </div>
      )
  }
}

export default Message
