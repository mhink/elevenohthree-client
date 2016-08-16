import {
  isUndefined, keys
} from 'lodash'

import {
  INCREMENT_COUNTER,
  FILL_BYTES,
  RESET_BYTES,

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
  byteCounter: 1
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

  return {
    ...state,
    ...safeIncrementBuffer(state),
    byteCounter: byteCounter + 1,
    bytes: newBytes
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
