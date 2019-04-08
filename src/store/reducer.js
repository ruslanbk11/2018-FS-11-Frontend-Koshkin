import * as actionTypes from './actions/actionTypes';
import chats from '../chats'
import messages from '../fixtures'

const initialState = {
  messages: messages,
  chats: chats,
  token: null,
  error: null,
  loading: false,
}

const authStart = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null,
    };
};

const authSuccess = (state, action) => {
    return {
        ...state,
        token: action.payload.token,
        error: null,
        loading: false,
    }
};

const authFail = (state, action) => {
    return {
        ...state,
        error: action.error,
        loading: false
    }
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SEND_MESSAGE') {
    let newMessages = [...state.messages];
    newMessages.push(action.payload);
    let newChats = [...state.chats];
    newChats[0].last_message_content = action.payload.text;
    newChats[0].last_message_added_at = action.payload.time;
    newChats[0].unread_messages = null;
    newChats[0].mine_last = true;

    console.log(newChats);
    return {
      ...state,
      messages: newMessages,
      chats: newChats,
    }
  }

  if (action.type === 'SEND_EMOJI') {
    let newMessages = [...state.messages];
    let payload = action.payload;
    newMessages.push(payload);
    let newChats = [...state.chats];
    newChats[0].last_message_content = payload.text;
    newChats[0].last_message_added_at = payload.time;
    newChats[0].unread_messages = null;
    newChats[0].mine_last = true;
    return {
      ...state,
      messages: newMessages,
      chats: newChats,
    }
  }

  if (action.type === 'READ_MESSAGES') {
    let newChats = [...state.chats];
    newChats[0].unread_messages = null;
    return {
      ...state,
      chats: newChats,
    }
  }
  switch (action.type) {
      case actionTypes.AUTH_START: return authStart(state, action);
      case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
      case actionTypes.AUTH_FAILED: return authFail(state, action);
      default: return state;
  }
}

export default reducer
