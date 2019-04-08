import React, { Component } from 'react'
import Message from '../Message'
import styles from './MessageList.css'
import { connect } from 'react-redux'

class MessageList extends Component{

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({behavior: 'smooth'});
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

    render(){
      const messageElements = this.props.msg.map(message =>
           <li key = {message.id} className={(message.author === 'Me') ? styles.my : styles.not_my} ref={(el) => { this.messagesEnd = el; }}>
             <Message message = {message} defaultMy = {message.author === 'Me'}/>
           </li>
       )
      //console.log(this.props.msg);
      return (
      <ul className={styles.messageList}>
        {messageElements}
      </ul>
    )
  }
}



const mapStateToProps = (state) => {
  return({
    msg: state.messages
  })
}

// const mapDispatchToProps = (dispatch) => {
//
// }

export default connect(mapStateToProps, null)(MessageList);
