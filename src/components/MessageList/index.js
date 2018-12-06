import React, { Component } from 'react'
import Message from '../Message'
import './styles.css'
import { connect } from 'react-redux'
//import store from '../../index'

class MessageList extends Component{

  // state = {
  //   messages: this.props.msg
  // }

   messageElements = this.state.msg.map(message =>
        <li key = {message.id} className={(message.author === 'Me') ? 'my' : 'not_my'}>
          <Message message = {message} defaultMy = {message.author === 'Me'}/>
        </li>
    )

    render(){
      return (
      <ul className='messageList'>
        {this.messageElements}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    msg: this.state.messages
  })
}

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
