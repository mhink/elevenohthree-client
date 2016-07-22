import { CALL_API } from 'redux-api-middleware'

export const MESSAGE_REQUEST = 'MESSAGE_REQUEST'
export const MESSAGE_SUCCESS = 'MESSAGE_SUCCESS'
export const MESSAGE_FAILURE = 'MESSAGE_FAILURE'

export function fetchMessage(token) {
  const headers = {}

  if(token) {
    headers['Authorization'] = `Bearer: ${token}`
  }

  return {
    [CALL_API]: {
      headers,
      endpoint: 'http://localhost:5000/message',
      method: 'GET',
      types: [MESSAGE_REQUEST, MESSAGE_SUCCESS, MESSAGE_FAILURE]
    }
  }
}
