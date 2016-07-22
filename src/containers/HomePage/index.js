import React, { Component, PropTypes } from 'react'
import { flow, omit } from 'lodash'
import { connect } from 'react-redux'
import AuthButton from 'components/AuthButton'
import { fetchMessage } from "./actions"

import BusinessCard from 'components/BusinessCard'
import TiltCard from 'components/TiltCard'

import {
  businessCardBack
} from './styles.css'

class HomePage extends Component {
  render () {
    const backChild = <div className={businessCardBack}><h1>Back</h1><p>This is the back.</p></div>

    return (
      <section>
        <TiltCard
          width="37rem"
          height="16rem"
          frontChild={<BusinessCard/>}
          backChild={backChild} />
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
