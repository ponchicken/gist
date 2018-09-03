import {
  GIST_FETCH_REQUEST,
  GIST_FETCH_SUCCESS
} from '../constants/gist'

const defaultState = {
  pending: false,
  data: {}
}

export function gist(state=defaultState, action) {
  console.log('action', action.type)
  switch(action.type) {
    case GIST_FETCH_REQUEST:
      return {
        ...state,
        pending: true
      }
    case GIST_FETCH_SUCCESS:
      console.log('GIST_FETCH_SUCCESS')
      return {
        ...state,
        pending: false,
        data: action.gist
      }
    default:
      return state
  }
}