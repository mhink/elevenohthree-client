import React, { Component, PropTypes } from 'react'
import { flow, omit } from 'lodash'
import { connect } from 'react-redux'
import AuthButton from 'components/AuthButton'
import BusinessCard from 'components/BusinessCard'
import { fetchMessage } from "./actions"

class HomePage extends Component {
  render () {
    return (
      <section>
        <BusinessCard />
      </section>
    )
  }
}

HomePage.propTypes = {
  isAuthenticated:  PropTypes.bool.isRequired,
  message:          PropTypes.string,
  error:            PropTypes.bool.isRequired,
  onFetchMessage:   PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const {
    auth:     { isAuthenticated, token },
    messages: { message, error }
  } = state

  return { isAuthenticated, token, message, error }
}

function mapDispatchToProps(dispatch) {
  return {dispatch}
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const {dispatch} = dispatchProps
  const {token} = stateProps

  const statePropsWithoutToken = omit(stateProps, 'token')
  const dispatchPropsFromState = {
    onFetchMessage: (evt) => dispatch(fetchMessage(token))
  }

  const props = Object.assign({},
      ownProps,
      statePropsWithoutToken,
      dispatchPropsFromState)
  return props
}

export default flow(
  connect(mapStateToProps, mapDispatchToProps, mergeProps)
)(HomePage)
