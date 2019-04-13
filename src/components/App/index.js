import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom'
import MessageList from '../MessageList'
import InputForm from '../InputForm'
import ChatList from '../ChatList'
import Auth from '../Auth';
import {connect} from "react-redux";
import * as actions from '../../store/actions';

import messages from '../../fixtures'
import menu from '../../static/menu.png'
import search from '../../static/search.png'
import back from '../../static/arrow_back.png'
import more from  '../../static/more_vert.png'
import styles from './App.css'

class App extends Component {
    state = {
      mssgs: messages.slice()
    }

    ChatList = () => (
         <div>
            <div className={styles.header}>
              <img src={menu} alt='menu' className={styles.menu} />
              <h1 className={styles.title}>Messenger</h1>
              <img src={search} alt='search' className={styles.search}/>
            </div>
            <ChatList />
        </div>
    )

    Chat = () => (
      <div className={styles.window}>
        <div className={styles.header}>
          <Link to='/list_chats'><img src={back} alt='back' className={styles.back} /></Link>
          <h1 className={styles.title}>Chuck</h1>
          <img src={search} alt='search' className={styles.search}/>
          <img src={more} alt='more' className={styles.more}/>
        </div>
        <div className={styles.container} id='container'>
          <MessageList />
        </div>
          <div className={styles.inputForm}>
            <InputForm onNewMessage={this.handleNewMessage}/>
          </div>
      </div>
    )

    componentDidMount() {
      this.props.onTryAutoLogin();
    }

    render (){
      let MainPage = () => (
        <div className={styles.mainPage}>
          <div>
            <h1>Messenger</h1>
            <div className={styles.links}>
              <Link to='/login'><label className={styles.login}>Log in</label></Link>
            </div>
          </div>
        </div>
      )

      let routes = (
        <div>
          <Switch>
            <Route path='/' exact component={MainPage}/>
            <Route path='/login' exact component={Auth}/>
            <Redirect to='/' />
          </Switch>
        </div>
      )

      if (this.props.isAuthed){
        MainPage = () => (
          <div className={styles.mainPage}>
            <div>
              <h1>Messenger</h1>
              <div className={styles.links}>
                <Link to='/login'><label className={styles.login}>Log in</label></Link>
                <Link to='/list_chats'><label className={styles.login}>Chats</label></Link>
              </div>
            </div>
          </div>
        )
        routes = (
          <div>
            <Switch>
              <Route path='/' exact component={MainPage}/>
              <Route path='/list_chats/chat_id=000' component={this.Chat}/>
              <Route path='/list_chats' exact component={this.ChatList}/>
              <Route path='/login' exact component={Auth}/>
              <Redirect to='/' />
            </Switch>
          </div>
        )

      }

      return (
          <Router>
            {routes}
          </Router>
        )
    }
}

const mapStateToProps = state => {
  return {
    isAuthed: state.token !== null,
  }
};

const initMapDispatchToProps = dispatch => {
  return {
    onTryAutoLogin: () => dispatch(actions.authCheckState()),
  }
};

export default connect(mapStateToProps, initMapDispatchToProps)(App);
