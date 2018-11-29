import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'


const store=createStore(reducer)

function reducer(state = []){
  return state;
}

render(<Provider store={store}><App/></Provider>, document.getElementById('root'))
