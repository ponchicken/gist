import {
  GISTS_FETCH_REQUEST,
  GISTS_FETCH_FAILURE,
  GISTS_FETCH_SUCCESS
} from '../constants/gists'

let defaultState = {
  status: false,
  error: false,
  list: []
}

export const gists = (state=defaultState, action) => {
  switch (action.type) {
    case GISTS_FETCH_REQUEST:
      return {
        ...state,
        status: 'pending'
      }
    case GISTS_FETCH_FAILURE:
      return {
        ...state,
        status: 'failure',
        error: action.error
      }
    case GISTS_FETCH_SUCCESS:
      return {
        ...state,
        status: 'success',
        list: action.list
      }
    default:
      return state
  }
}