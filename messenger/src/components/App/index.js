import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MessageList from '../MessageList'
import InputForm from '../InputForm'
import messages from '../../fixtures'
import avatar from '../../static/avatar.png'
import menu from '../../static/menu.png'
import search from '../../static/search.png'
import back from '../../static/arrow_back.png'
import more from  '../../static/more_vert.png'
import './styles.css'

class App extends Component {
    state = {
      mssgs: messages.slice()
    }

    ChatList = () => (
         <div>
            <div className='header'>
              <img src={menu} alt='menu' className='menu' />
              <h1 className='title'>Messenger</h1>
              <img src={search} alt='search' className='search'/>
            </div>
          <Link to='/list_chats/chat_id=1' className='link'>
          <div className='list_chats'>
            <img src={avatar} alt='avatar' className='avatar' />
            Chuck
          </div>
          </Link>
        </div>
    )

    Chat = () => (
      <div className='window'>
        <div className='header'>
          <Link to='/'><img src={back} alt='back' className='back' /></Link>
          <h1 className='title'>Chuck</h1>
          <img src={search} alt='search' className='search'/>
          <img src={more} alt='more' className='more'/>
        </div>
        <div className='container'>
          <MessageList messages={this.state.mssgs}/>
        </div>
        <div className='inputForm'>
          <InputForm onNewMessage={this.handleNewMessage}/>
        </div>
      </div>
    )

    render (){
        return (
          <Router>
            <div>
              <Route path='/list_chats/chat_id=1' component={this.Chat}/>
              <Route path='/' exact component={this.ChatList}/>
            </div>
          </Router>
        )
    }

    handleNewMessage = (newMessage) => {
      var input = document.getElementById('input')
      const arr = this.state.mssgs
      console.log('heh')
      arr.push(newMessage)
      this.setState({
        mssgs: arr
      })
      input.value = ''
    }
}

export default App
