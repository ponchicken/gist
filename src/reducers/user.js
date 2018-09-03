import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from '../constants/user'

const defaultState = {
  pending: false,
  data: {},
  error: ''
}

export const user = (state=defaultState, action) => {
  switch(action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        pending: true
      }
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload,
        error: defaultState.error
      }
    case FETCH_USER_FAILURE:
      return {
        ...state,
        pending: false,
        data: defaultState.data,
        error: action.payload
      }
    default:
      return state
  }
}