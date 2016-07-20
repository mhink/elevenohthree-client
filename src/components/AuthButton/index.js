import React, { PropTypes } from 'react'
import cs from 'classnames'

import {
  authButton
} from './styles.css'

const classnames = () => cs('btn-small', 'btn-outline', authButton)

const AuthButton = (props, context) => {
  const { isAuthenticated, onLogin, onLogout } = context

  if(isAuthenticated) {
    return <button className={classnames()} onClick={onLogout}>Logout</button>
  }
  else {
    return <button className={classnames()} onClick={onLogin}>Login</button>
  }
}

AuthButton.contextTypes = {
  isAuthenticated:  PropTypes.bool.isRequired,
  onLogin:          PropTypes.func.isRequired,
  onLogout:         PropTypes.func.isRequired,
}

export default AuthButton
