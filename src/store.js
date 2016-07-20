import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import { apiMiddleware } from 'redux-api-middleware'
import rootReducer from './reducers'

const devtools = window.devToolsExtension || (() => noop => noop)

export default function configureStore(initialState = {}, history) {
  const middlewares = [
    thunkMiddleware,
    apiMiddleware,
    routerMiddleware(history)
  ]

  const enhancers = [
    applyMiddleware(...middlewares),
    devtools()
  ]

  return createStore(
    rootReducer,
    initialState,
    compose(...enhancers)
  )
}
