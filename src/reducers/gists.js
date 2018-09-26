import {
  FETCH_GISTS_REQUEST,
  FETCH_GISTS_SUCCESS,
  FETCH_GISTS_FAILURE
} from '../constants/gists'

import {
  SET_ACTIVE_GIST,
  FETCH_GIST_FILE_REQUEST,
  FETCH_GIST_FILE_SUCCESS,
  FETCH_GIST_FILE_FAILURE
} from '../constants/gist'

import {
  CHANGE_GIST,
  UPDATE_GIST_SUCCESS,
  UPDATE_GIST_ERROR,
  UPDATE_GISTS_START,
  UPDATE_GISTS_FINISH,
  FILE_ADD,
  FILE_REMOVE,
  FILE_RENAME
} from '../constant'

import {
  setActiveGist,
  fetchGistFileRequest,
  fetchGistFileSuccess,
  fetchGistFileFailure,
  changeGist,
  updateGistSuccess,
  updateGistError,
  fileAdd,
  fileRemove,
  fileRename
} from './gist'

import { createReducer } from '../helpers/createReducers'

const defaultState = {
  pending: false,
  data: {},
  error: ''
}

const fetchGistsRequest = (state) => ({
  ...state,
  pending: true
})

const fetchGistsSuccess = (state, action) => ({
  ...state,
  pending: false,
  data: action.payload,
  error: defaultState.error
})

const fetchGistsFailure = (state, action) => ({
  ...state,
  pending: false,
  error: action.payload
})

const updateGistsStart = (state) =>({
  ...state,
  patching: true
})

const updateGistsFinish = (state) => ({
  ...state,
  patching: false
})

export const gists = createReducer(defaultState, {
  [FETCH_GISTS_REQUEST]: fetchGistsRequest,
  [FETCH_GISTS_SUCCESS]: fetchGistsSuccess,
  [FETCH_GISTS_FAILURE]: fetchGistsFailure,
  [SET_ACTIVE_GIST]: setActiveGist,
  [FETCH_GIST_FILE_REQUEST]: fetchGistFileRequest,
  [FETCH_GIST_FILE_SUCCESS]: fetchGistFileSuccess,
  [FETCH_GIST_FILE_FAILURE]: fetchGistFileFailure,
  [CHANGE_GIST]: changeGist,
  [UPDATE_GISTS_START]: updateGistsStart,
  [UPDATE_GISTS_FINISH]: updateGistsFinish,
  [UPDATE_GIST_SUCCESS]: updateGistSuccess,
  [UPDATE_GIST_ERROR]: updateGistError,
  [FILE_ADD]: fileAdd,
  [FILE_REMOVE]: fileRemove,
  [FILE_RENAME]: fileRename
})

