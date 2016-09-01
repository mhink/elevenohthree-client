import React, { Component, PropTypes } from 'react'
import { flow } from 'lodash'
import { connect } from 'react-redux'
import { 
  demoSection,
  tickDebugger
} from './styles.css'
import {
  consumeByte
} from './actions'

const Debugger = flow(
  connect(
    () => ({}),
    (dispatch) => ({
      onTick: () => dispatch(consumeByte())
    })
  )
)(({onTick}) => (
  <div className={tickDebugger}>
    <h2>DEBUG</h2>
    <button onClick={this::onTick}>TICK</button>
  </div>
))

class BoxMuellerDemo extends Component {
  render () {
    return (
      <div className={demoSection}>
        <Debugger />
        <h1>Box-Mueller Demo</h1>
      </div>
    )
  }
}

export default flow(
)(BoxMuellerDemo)
