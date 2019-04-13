import React, {Component} from 'react'
import styles from './Chat.css'
import avatar from '../../static/avatar.png'

class Chat extends Component {
  constructor(props) {
    super(props)

    this.state = props.chat
  }

  render () {
    let status = this.props.chat.mine_last ? 'v' : this.state.unread_messages
    return (
      <div className={styles.chat}>
        <div className={styles.userInfo}>
          <div className={styles.userAvatar}>
            <img src={avatar} alt='avatar' className={styles.avatar} />
          </div>
          <div className={styles.topic}>
            <content className={styles.author}>{this.state.author}</content>
            <content className={styles.last_message_content}>{this.state.last_message_content}</content>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.time}>{this.state.last_message_added_at}</div>
          <div className={styles.new_messages}>{status}</div>
        </div>
      </div>
    )
  }

}

export default Chat
