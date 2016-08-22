import {
  CONSUME_BYTES,
  FILL_CACHE,
  RESET
} from './constants'


export function consumeBytes(count) {
  return { type: CONSUME_BYTES, count }
}

export function fillCache() {
  return { type: FILL_BYTES }
}

export function reset() {
  return { type: RESET }
}
