import {
  isUndefined, keys, range
} from 'lodash'

import {
  CONSUME_BYTES,
  FILL_CACHE,
  RESET,

  CACHE_LENGTH,
  BUFFER_LENGTH
} from './constants'

function getRandomByteBuffer() {
  const buffer = new Uint8Array(BUFFER_LENGTH)
  window.crypto.getRandomValues(buffer)
  return buffer
}

const initialBuffer = getRandomByteBuffer()

const initialState = {
  bufferIndex:    1,
  buffer:         initialBuffer,
  bytes:          {
    0: initialBuffer[0]
  },
  byteCounter: 1,
  distribution: range(256).map(i => ({x: i, y: 0, nx: 0}))
}

// TODO: some reducer methods aren't properly using 'newBytes'.
//       This might have a performance problem, because we're
//       kind of allocating a lot of objects in this function...
function addBytesToDistribution(state, newBytes) {
  const {distribution, byteCounter} = state

  const newDistribution = []

  for(let dval of distribution) {
    newDistribution[dval.x] = Object.assign({}, dval)
  }

  for(let newByte of newBytes) {
    newDistribution[newByte].nx += 1
  }

  for(let ndval of newDistribution) {
    ndval.y = ndval.nx / byteCounter
  }

  return {
    ...state,
    distribution: newDistribution
  }
}

function safeIncrementBuffer(state) {
  let {bufferIndex, buffer} = state

  if(bufferIndex+1 >= buffer.length) {
    return {
      ...state,
      bufferIndex: 0,
      buffer: getRandomByteBuffer()
    }
  }
  else {
    return {
      ...state,
      bufferIndex: bufferIndex + 1,
      buffer
    }
  }
}

function resetBytes(state) {
  const {bufferIndex, buffer} = state
  let newByte = buffer[bufferIndex]

  return {
    ...state,
    ...safeIncrementBuffer(state),
    byteCounter: 1,
    bytes: {
      0: newByte
    }
  }
}


function incrementBytes(state) {
  const {bufferIndex, buffer} = state
  let newByte = buffer[bufferIndex]

  let { bytes, byteCounter } = state
  let newBytes = Object.assign({}, bytes)

  newBytes[byteCounter] = newByte

  if(keys(newBytes).length > CACHE_LENGTH) {
    delete newBytes[byteCounter - CACHE_LENGTH]
  }
  const { distribution } = addBytesToDistribution(state, [newByte])

  return {
    ...state,
    ...safeIncrementBuffer(state),
    byteCounter: byteCounter + 1,
    bytes: newBytes,
    distribution
  }
}

function fillBytes(state) {
  const { byteCounter } = state

  if(byteCounter < CACHE_LENGTH) {
    for(let i = 0; i < (CACHE_LENGTH - byteCounter); i++) {
      state = incrementBytes(state)
    }
  }
  return state
}

function bufferIndexReducer(state, action) {
  case Fill
}


export default function(state=initialState, action) {
  switch(action.type) {
    case FILL_BYTES:
      return fillBytes(state)
    case INCREMENT_COUNTER:
      return incrementBytes(state)
    case RESET_BYTES:
      return resetBytes(state)
    default:
      return state;
  }
}
