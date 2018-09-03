import {
  FETCH_GISTS_REQUEST,
  FETCH_GISTS_SUCCESS,
  FETCH_GISTS_FAILURE
} from '../constants/gists'

import {
  getGists
} from '../api/get'

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
    .then(data => dispatch(gistsSuccess(data)))
    .catch(error => dispatch(gistsFailure(error)))
}