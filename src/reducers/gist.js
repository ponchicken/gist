import {
  SET_ACTIVE_GIST,
  FETCH_GIST_FILE_REQUEST,
  FETCH_GIST_FILE_SUCCESS,
  FETCH_GIST_FILE_ERROR
} from '../constants/gist'
import { fileRequest } from '../actions/gist';

const defaultState = {
  
}

export const gist = (state=defaultState, action) => {
  switch (action.type) {
    case SET_ACTIVE_GIST:
      return action.payload
    case FETCH_GIST_FILE_REQUEST:
      let name = action.payload
      return {
        ...state,
        files: {
          ...state.files,
          [name]: {
            ...state.files[name],
            pending: true
          }
        }
      }
    case FETCH_GIST_FILE_SUCCESS:
      console.log(action.payload)
      let file = action.payload
      return {
        ...state,
        files: {
          ...state.files,
          [file.name]: {
            ...state.files[file.name],
            pending: false,
            data: file.data
          }
        }
      }
    default:
      return state
  }
}