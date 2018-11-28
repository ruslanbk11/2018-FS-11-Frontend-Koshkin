import React from 'react'
import Message from '../Message'
//import InputForm from '../InputForm'
import './styles.css'

export default function MessageList ({ messages }) {
  const messageElements = messages.map(message =>
      <li key = {message.id} className={(message.author === 'Me') ? 'my' : 'not_my'}>
        <Message message = {message} defaultMy = {message.author === 'Me'}/>
      </li>
  )
  return (
    <ul className='messageList'>
      {messageElements}
    </ul>
  )
}
