import {
  FETCH_GISTS_REQUEST,
  FETCH_GISTS_SUCCESS,
  FETCH_GISTS_FAILURE
} from '../constants/gists'


import {
  UPDATE_GISTS_START,
  UPDATE_GISTS_FINISH
} from '../constant'

import {
  getGists
} from '../api/get'
import { patchGist } from '../api/patch'
import { postAddGist } from '../api/post'
import { deleteGist } from '../api/delete'

import {
  loadGistFiles,
  updateGistSuccess,
  updateGistError
} from './gist'

export const gistsRequest = () => ({
  type: FETCH_GISTS_REQUEST
})

export const updateGistsStart = () => ({
  type: UPDATE_GISTS_START
})

export const updateGistsFinish = () => ({
  type: UPDATE_GISTS_FINISH
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

const sendDataToGh = (promise, dispatch) => {
  promise
    .then(gist => {
      dispatch(updateGistSuccess(gist))
    })
    .catch(ex => {
      dispatch(updateGistError(ex))
    })
    .finally(res => {
      dispatch(updateGistsFinish())
    })
}

export const updateGists = gists => dispatch => {
  const updatedGists = gists.data.filter(gist => gist.changed || gist.added || gist.deleted)
  updatedGists.forEach(gist => {
    dispatch(updateGistsStart())
    if (gist.deleted) {
      sendDataToGh(deleteGist(gist.id), dispatch)
    } else if (gist.added) {
      sendDataToGh(postAddGist(gist), dispatch)
    } else if (gist.changed) {
      sendDataToGh(patchGist(gist), dispatch)
    } 
  })
  return updatedGists
}