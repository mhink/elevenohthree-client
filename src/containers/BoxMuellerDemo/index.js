import React, { Component, PropTypes } from 'react'
import { flow } from 'lodash'
import { connect } from 'react-redux'
import { incrementCounter, fillBytes, resetBytes } from './actions.js'
import { demoSection } from './styles.css'

import AnimatedByteList from 'containers/AnimatedByteList'
import PmfGraph from 'containers/PmfGraph'
import Debugger from './Debugger.js'

import {
  CACHE_LENGTH
} from './constants.js'

import {
  Title,
  Intro,
  Sampling,
  Discrete
} from './content.js'

class BoxMuellerDemo extends Component {
  render () {
    const { onTick, onFillBytes, onResetBytes } = this.props
    return (
      <div className={demoSection}>
        <Debugger 
          onTick={() => onTick()}
          onStart={() => this.startTimer()}
          onStop={() => this.stopTimer()}
          onFill={() => onFillBytes()}
          onReset={() => onResetBytes()} />
        <Title />
        <Intro />
        <Sampling>
        </Sampling>
        <Discrete>
        </Discrete>
      </div>
    )
  }

  startTimer () {
    const { onTick } = this.props
    this.byteInterval = setInterval(() => onTick(), 50)
  }

  stopTimer () {
    clearInterval(this.byteInterval)
  }

  componentWillUnmount () {
    this.stopTimer()
  }
}

BoxMuellerDemo.propTypes = {
  onTick: PropTypes.func.isRequired,
  onFillBytes: PropTypes.func.isRequired,
  onResetBytes: PropTypes.func.isRequired
}

function mapDispatchToProps(dispatch) {
  return {
    onTick: () => {
      return dispatch(incrementCounter())
    },
    onFillBytes: () => {
      return dispatch(fillBytes())
    },
    onResetBytes: () => {
      return dispatch(resetBytes())
    }
  }
}

export default flow(
  connect(() => ({}), mapDispatchToProps)
)(BoxMuellerDemo)
