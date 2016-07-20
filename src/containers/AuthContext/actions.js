import { CALL_API } from 'redux-api-middleware'

// There are three possible states for our login
// process and we need actions for each of them
export const SHOW_LOCK = 'SHOW_LOCK'
export const LOCK_SUCCESS = 'LOCK_SUCCESS'
export const LOCK_FAILURE = 'LOCK_FAILURE'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

// Action creators
function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
  }
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
  }
}

function showLock() {
  return {
    type: SHOW_LOCK
  }
}

function lockSuccess (profile, token) {
  return {
    type: LOCK_SUCCESS,
    profile,
    token
  }
}

function lockError (err) {
  return {
    type: LOCK_FAILURE,
    err
  }
}

import Auth0Lock from 'auth0-lock'

export function login(clientId, tokenProviderUrl) {
  const lock = Auth0Lock(clientId, tokenProviderUrl)

  return dispatch => {
    lock.show((err, profile, token) => {
      if(err) {
        dispatch(lockError(err))
        return
      }

      localStorage.setItem('profile', JSON.stringify(profile))
      localStorage.setItem('id_token', token)

      dispatch(lockSuccess(profile, token))
    })
  }
}

export function logout() {
  return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('id_token')
    localStorage.removeItem('profile')
    dispatch(receiveLogout())
  }
}
