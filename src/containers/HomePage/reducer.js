import {
  MESSAGE_REQUEST, 
  MESSAGE_SUCCESS, 
  MESSAGE_FAILURE
} from './actions'

const initialState = {
  isFetching: false,
  error: false,
  message: ''
}

export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case MESSAGE_REQUEST:
      if(action.error) {
        return Object.assign({}, state, {
          isFetching:   false,
          error:        action.error,
          message:      action.payload.message
        })
      } else {
        return Object.assign({}, state, {
          isFetching:   true,
        })
      }
    case MESSAGE_SUCCESS:
      return Object.assign({}, state, {
        isFetching:     false,
        message:        action.payload.message,
        error:          false
      })
    case MESSAGE_FAILURE:
      return Object.assign({}, state, {
        isFetching:     false,
        message:        action.payload.message,
        error:          true,
      })
    default:
      return state
    }
}
