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

  const linkElements = [];
  for(var i = 0; i < chats.length; i++){
    var link = '/list_chats/chat_id='+chats[i].id

    linkElements.push((
      <Link key={i} to={link}>{chatElements[i]}</Link>
    ))
  }

  return (
    <ul className='chatList'>
      {linkElements}
    </ul>
  )
}
