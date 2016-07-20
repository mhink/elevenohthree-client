import React, { Component, PropTypes } from 'react'
import { pick, flow } from 'lodash'
import { connect } from 'react-redux'
import { login, logout } from './actions'

class AuthContext extends Component {
  getChildContext () {
    return pick(this.props, ['isAuthenticated', 'onLogin', 'onLogout'])
  }

  render () {
    const { children } = this.props
    return children;
  }
}

AuthContext.propTypes = {
  clientId:         PropTypes.string.isRequired,
  tokenProviderUrl: PropTypes.string.isRequired,
  isAuthenticated:  PropTypes.bool.isRequired,
  onLogin:          PropTypes.func.isRequired,
  onLogout:         PropTypes.func.isRequired,
  children:         PropTypes.node.isRequired,
}

AuthContext.childContextTypes = {
  isAuthenticated:  PropTypes.bool.isRequired,
  onLogin:          PropTypes.func.isRequired,
  onLogout:         PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  const { auth: { isAuthenticated }} = state
  return { isAuthenticated }
}

function mapDispatchToProps(dispatch, ownProps) {
  const { clientId, tokenProviderUrl } = ownProps
  return {
    onLogin:   (evt) => dispatch(login(clientId, tokenProviderUrl)),
    onLogout:  (evt) => dispatch(logout())
  }
}

export default flow(
  connect(mapStateToProps, mapDispatchToProps)
)(AuthContext)
