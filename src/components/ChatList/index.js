import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Chat from '../Chat'
import './styles.css'
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
    for(var i = 0; i < this.props.chats.length; i++){
      var link = '/list_chats/chat_id='+this.props.chats[i].id
      linkElements.push((
        <Link onClick={this.props.onClick} key={i} to={link}>{chatElements[i]}</Link>
      ))
    }

    return (
      <ul className='chatList'>
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
