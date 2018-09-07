import {
  FETCH_GISTS_REQUEST,
  FETCH_GISTS_SUCCESS,
  FETCH_GISTS_FAILURE
} from '../constants/gists'

const defaultState = {
  pending: false,
  data: {},
  error: ''
}

export const gists = (state=defaultState, action) => {
  switch(action.type) {
    case FETCH_GISTS_REQUEST:
      return {
        ...state,
        pending: true
      }
    case FETCH_GISTS_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload,
        error: defaultState.error
      }
    case FETCH_GISTS_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload
      }
    default:
      return state
  }
}