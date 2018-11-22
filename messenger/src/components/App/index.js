import React, { Component } from 'react'
import MessageList from '../MessageList'
import InputForm from '../InputForm'
import messages from '../../fixtures'
import './styles.css'

class App extends Component {
    state = {
      mssgs: messages.slice()
    }
    render (){
        return (
          <div className='window'>
            <div className='container'>
              <MessageList messages={this.state.mssgs}/>
            </div>
            <div className='inputForm'>
              <InputForm onNewMessage={this.handleNewMessage}/>
            </div>
          </div>
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
