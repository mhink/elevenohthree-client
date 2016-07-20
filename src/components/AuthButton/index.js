import React, { PropTypes } from 'react'

const AuthButton = (props, context) => {
  const { isAuthenticated, onLogin, onLogout } = context

  if(isAuthenticated) {
    return <button className='btn' onClick={onLogout}>Logout</button>
  }
  else {
    return <button className='btn' onClick={onLogin}>Login</button>
  }
}

AuthButton.contextTypes = {
  isAuthenticated:  PropTypes.bool.isRequired,
  onLogin:          PropTypes.func.isRequired,
  onLogout:         PropTypes.func.isRequired,
}

export default AuthButton
