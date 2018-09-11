import {
  FETCH_GISTS_REQUEST,
  FETCH_GISTS_SUCCESS,
  FETCH_GISTS_FAILURE
} from '../constants/gists'

import {
  getGists
} from '../api/get'

import {
  loadGistFiles
} from './gist'

export const gistsRequest = () => ({
  type: FETCH_GISTS_REQUEST
})

export const gistsSuccess = gists => ({
  type: FETCH_GISTS_SUCCESS,
  payload: gists
})

export const gistsFailure = error => ({
  type: FETCH_GISTS_FAILURE,
  payload: error
})

export const fetchGists = dispatch => {
  dispatch(gistsRequest())
  getGists()
    .then(gists => {
      dispatch(gistsSuccess(gists))
      dispatch(loadGistsFiles(gists))
    })
    .catch(error => {
      console.log(error)
      return dispatch(gistsFailure(error))
    })
}

export const loadGistsFiles = gists => dispatch => {
  gists.forEach(gist => {
    dispatch(loadGistFiles(gist))
  })
}