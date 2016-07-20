import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import authReducer from 'containers/AuthContext/reducer.js'

const rootReducer = combineReducers({
  routing:  routerReducer,
  auth:     authReducer,
})

export default rootReducer
