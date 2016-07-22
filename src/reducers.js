import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import authReducer      from 'containers/AuthContext/reducer.js'
import messagesReducer  from 'containers/HomePage/reducer.js'

const rootReducer = combineReducers({
  routing:  routerReducer,
  auth:     authReducer,
  messages: messagesReducer,
})

export default rootReducer
