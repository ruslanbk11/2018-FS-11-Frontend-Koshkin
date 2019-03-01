import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose,  } from 'redux';
import thunk from 'redux-thunk';
import reducer from './store/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
))
export default store

render(<Provider store={store}><App/></Provider>, document.getElementById('root'))
