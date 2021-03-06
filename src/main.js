import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import AuthContext from 'containers/AuthContext'

import configureStore from './store'
import createRoutes from './routes'

require("siimple")
require("styles/base.css")

require("file?name=[name].[ext]!static/404.html")
require("file?name=[name].[ext]!static/422.html")
require("file?name=[name].[ext]!static/500.html")
require("file?name=[name].[ext]!static/apple-touch-icon-precomposed.png")
require("file?name=[name].[ext]!static/apple-touch-icon.png")
require("file?name=[name].[ext]!static/favicon.ico")
require("file?name=[name].[ext]!static/robots.txt")

const initialState = {}
const store = configureStore(initialState, browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

const auth0_clientId = process.env.AUTH0_CLIENT_ID
const auth0_tokenProviderUrl = process.env.AUTH0_URL

ReactDOM.render(
  <Provider store={store}>
    <AuthContext clientId={auth0_clientId} tokenProviderUrl={auth0_tokenProviderUrl}>
      <Router history={history} routes={createRoutes()} />
    </AuthContext>
  </Provider>,
  $("#app")[0]
)

window.$ = $;
