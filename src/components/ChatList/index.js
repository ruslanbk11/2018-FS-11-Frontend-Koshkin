import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Chat from '../Chat'
import Avatar from '../Avatar'
import styles from './ChatList.css'
import {connect} from 'react-redux'

class ChatList extends Component {
  render() {
    const chatElements = this.props.chats.map(chat => (
        <li key = {chat.id}>
          <Chat chat={chat}/>
        </li>
      )
    )
    const linkElements = [];
    this.props.chats.map(el => (
      linkElements.push((
        <label className={styles.wrapper}>
          <label className={styles.avatar}>
            <Avatar />
          </label>
          <Link
            classname={styles.link}
            onClick={this.props.onClick}
            key={el.id}
            to={`/list_chats/chat_id=${el.id}`}
          >{chatElements[Number(el.id)]}</Link>
        </label>
      ))
    ))

    return (
      <ul className={styles.chatList}>
        {linkElements}
      </ul>
    )
  }
}

const mapStateToProps = (state) =>{
  return({
    chats: state.chats
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    onClick: () => {
      dispatch({
        type: 'READ_MESSAGES'
      })
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatList)
