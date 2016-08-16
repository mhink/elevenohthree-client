import React, { PropTypes } from 'react'
import ReactTransitionGroup from 'react-addons-transition-group'
import { flow, map } from 'lodash'
import { connect } from 'react-redux'

import AnimatedByteListItem from './AnimatedByteListItem.js'

import { byteSamples } from './styles.css'

function byteString(b) {
  return "0x" + ((b < 0x10) ? "0" : "") + b.toString(16)
}

function bytePos(key, numKeys, maxKeys) {
  return (numKeys < maxKeys)
    ? key
    : key - numKeys + maxKeys
}

const AnimatedByteList = ({bytes, byteCounter, unit, maxLength}) => (
  <pre className={byteSamples}>
    <ReactTransitionGroup component="ul">
      <li> </li>
      { map(bytes, (byte, key) => {
        return <AnimatedByteListItem key={key} 
                                 pos={Number(bytePos(key, byteCounter, maxLength))}
                                 unit={unit}>
                  {byteString(byte)}
               </AnimatedByteListItem>
      })}
    </ReactTransitionGroup>
  </pre>
)

AnimatedByteList.propTypes = {
  bytes: PropTypes.object.isRequired,
  byteCounter: PropTypes.number.isRequired,
  unit: PropTypes.number.isRequired,
  maxLength: PropTypes.number.isRequired
}

function mapStateToProps(state) {
  const { boxMuellerDemo } = state
  const { bytes, byteCounter } = boxMuellerDemo
  return { bytes, byteCounter }
}

export default flow(
  connect(mapStateToProps)
)(AnimatedByteList)
