import {
  INCREMENT_COUNTER,
  FILL_BYTES,
  RESET_BYTES,

  CACHE_LENGTH,
  BUFFER_LENGTH
} from './constants'


export function incrementCounter() {
  return { type: INCREMENT_COUNTER }
}

export function fillBytes() {
  return { type: FILL_BYTES }
}

export function resetBytes() {
  return { type: RESET_BYTES }
}
