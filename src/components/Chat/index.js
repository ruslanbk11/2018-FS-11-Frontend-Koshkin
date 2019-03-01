import React, {Component} from 'react'
import './styles.css'
import avatar from '../../static/avatar.png'

class Chat extends Component {
  constructor(props) {
    super(props)

    this.state = props.chat
  }

  render () {
    const status = this.props.chat.mine_last ? 'v' : this.state.unread_messages
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
          <div className='new_messages'>{status}</div>
        </div>
      </div>
    )
  }

}

export default Chat
