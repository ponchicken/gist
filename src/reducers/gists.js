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
  setActiveGist,
  fetchGistFileRequest,
  fetchGistFileSuccess,
  fetchGistFileFailure
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

export const gists = createReducer(defaultState, {
  [FETCH_GISTS_REQUEST]: fetchGistsRequest,
  [FETCH_GISTS_SUCCESS]: fetchGistsSuccess,
  [FETCH_GISTS_FAILURE]: fetchGistsFailure,
  [SET_ACTIVE_GIST]: setActiveGist,
  [FETCH_GIST_FILE_REQUEST]: fetchGistFileRequest,
  [FETCH_GIST_FILE_SUCCESS]: fetchGistFileSuccess,
  [FETCH_GIST_FILE_FAILURE]: fetchGistFileFailure
})

