import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'containers/App'
import HomePage from 'containers/HomePage'

export default function createRoutes(store) {
  return (
    <Route path="/" components={App}>
      <IndexRoute components={HomePage} />
    </Route>
  )
}
