import React from 'react'
import styles from './Message.css'

const Message = (props) => {

  const options = {
      hour: 'numeric',
      minute: 'numeric'
  };

  const isMy = props.defaultMy
  const { message } = props
  const content = message.content
  let author;
  //Если сообщение не принадлежит пользователю, то отобразить элемент с автором
  if (!isMy) {
    author = <section className='author'>{message.author}</section>
  }
  const message_class = isMy ? styles.my_message : styles.not_my_message
  return (
      <div className={message_class}>
          {author}
          <section className={styles.content}>{message.text}</section>
          {content}
          <div className={styles.time}>{(new Date()).toLocaleString('ru', options)}</div>
      </div>
  )
}

export default Message
