import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './store'
import createRoutes from './routes'

require("siimple")
require("./styles.css")

const initialState = {}
const store = configureStore(initialState, browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

console.log("Rendering react dom...")

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={createRoutes()} />
  </Provider>,
  $("#app")[0]
);
