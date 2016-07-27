import {
  SHOW_LOCK, 
  LOCK_SUCCESS, 
  LOCK_FAILURE, 
  LOGOUT_REQUEST, 
  LOGOUT_SUCCESS,
} from './actions'

const initialState = {
  isFetching:       false,
  isAuthenticated:  localStorage.getItem('id_token') ? true : false,
  token:            localStorage.getItem('id_token'),
  profile:          JSON.parse(localStorage.getItem('profile'))
}

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOCK:
      return Object.assign({}, state, {
        isFetching:       true,
      })
    case LOGOUT_REQUEST:
      return Object.assign({}, state, {
        isFetching:       true,
      })
    case LOCK_SUCCESS:
      return Object.assign({}, state, {
        isFetching:       false,
        isAuthenticated:  true,
        profile:          action.profile,
        token:            action.token
      })
    case LOCK_FAILURE:
    case LOGOUT_SUCCESS:
      return _.omit(Object.assign({}, state, {
        isFetching:       false,
        isAuthenticated:  false,
      }), ['profile', 'token'])
    default:
      return state
  }
}
