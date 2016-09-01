import {
  CONSUME_BYTE
} from './actions'

const CACHE_LENGTH = 10
const BUFFER_LENGTH = 100
const UINT8_BUFFER = new Uint8Array(BUFFER_LENGTH)
let bufferIx = 0
function getRandomByte() {
  if(bufferIx == 0) {
    window.crypto.getRandomValues(UINT8_BUFFER)
  }

  const newByte = UINT8_BUFFER[bufferIx]

  bufferIx = (bufferIx + 1) % BUFFER_LENGTH

  return newByte
}

const initialState = {
  byteCounter: 0,
  byteCache:   {}
}

export default function(state=initialState, action) {
  switch(action.type) {
    case CONSUME_BYTE:
      const { byteCounter, byteCache } = state
      const newCache = Object.assign({}, byteCache)
      newCache[byteCounter + 1] = getRandomByte()
      
      if(byteCounter > CACHE_LENGTH) {
        delete newCache[byteCounter
      }
    default:
      return state
  }
}
