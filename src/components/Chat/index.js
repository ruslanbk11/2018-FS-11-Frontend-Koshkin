import React, {Component} from 'react'
import './styles.css'
import avatar from '../../static/avatar.png'

class Chat extends Component {
  constructor(props) {
    super(props)

    this.state = {
      author: props.chat.author,
      last_message_added_at: '15:45',
      last_message_content: 'What are you doing?',
      new_messages: 2,
    }
  }

  render () {
    return (

      <div className='chat'>
        <div className='userInfo'>
          <div className='userAvatar'>
            <img src={avatar} alt='avatar' className='avatar' />
          </div>
          <div className='topic'>
            <content className='author'>{this.state.author}</content>
            <content className='last_message_content'>{this.state.last_message_content}</content>
          </div>
        </div>
        <div className='info'>
          <div className='time'>{this.state.last_message_added_at}</div>
          <div className='new_messages'>{this.state.new_messages}</div>
        </div>
      </div>
    )
  }

}

export default Chat