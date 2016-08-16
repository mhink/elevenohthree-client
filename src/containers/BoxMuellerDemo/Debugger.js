import React, { Component, PropTypes } from 'react'
import { flow, toPairs, map } from 'lodash'

import {
  tickDebugger
} from './styles.css'

const Debugger = ({onTick, onStart, onStop, onFill, onReset}) => {
  return (
    <div className={tickDebugger}>
      <h1>DEBUG</h1>
      <button onClick={() => onTick()}>TICK</button>
      <button onClick={() => onStart()}>START</button>
      <button onClick={() => onStop()}>STOP</button>
      <button onClick={() => onFill()}>FILL</button>
      <button onClick={() => onReset()}>RESET</button>
    </div>
  )
}

export default Debugger
