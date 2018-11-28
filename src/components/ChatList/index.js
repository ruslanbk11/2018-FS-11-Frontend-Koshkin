import React from 'react'
import {Link} from 'react-router-dom'
import Chat from '../Chat'
import './styles.css'

export default function ChatList ({ chats }) {
  const chatElements = chats.map(chat => (
      <li key = {chat.id}>
        <Chat chat={chat}/>
      </li>
    )
  )
  return (
    <ul className='chatList'>
      {chatElements}
    </ul>
  )
}
