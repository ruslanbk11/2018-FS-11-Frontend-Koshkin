import chats from '../chats'
import messages from '../fixtures'

const initialState = {
  messages: messages,
  chats: chats,
}

const reducer = (state = initialState, action) => {
  if (action.type === 'SEND_MESSAGE') {
    //console.log(state)
    return {
      ...state,
      messages: [...state.messages,
                  {
                    id : new Date(),
                    author: action.payload.author,
                    text: action.payload.text,
                    content: action.payload.content,
                    time: action.payload.time,
                  }
                ]
    }
  }
  return state
}

export default reducer
