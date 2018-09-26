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
  FILE_ADD,
  FILE_REMOVE
} from '../constant'


export const setActiveGist = gist => ({
  type: SET_ACTIVE_GIST,
  payload: gist
})
 
export const fileRequest = data => ({
  type: FETCH_GIST_FILE_REQUEST,
  payload: data
})

export const fileSuccess = data => ({
  type: FETCH_GIST_FILE_SUCCESS,
  payload: data
})

export const fileFailure = error => ({
  type: FETCH_GIST_FILE_FAILURE,
  payload: error
})

export const changeGist = gist => ({
  type: CHANGE_GIST,
  payload: gist
})

export const updateGistSuccess = gist => ({
  type: UPDATE_GIST_SUCCESS,
  payload: gist
})

export const updateGistError = error => ({
  type: UPDATE_GIST_ERROR,
  payload: error
})

export const fileAdd = (gist) => ({
  type: FILE_ADD,
  payload: gist
})

export const fileRemove = (gist, filename) => ({
  type: FILE_REMOVE,
  payload: {
    gist, filename
  }
})

export const loadGistFiles = gist => dispatch => {
  Object.keys(gist.files).forEach(name => {
    dispatch(fetchGistFile({
      id: gist.id,
      file: gist.files[name]
    }))
  })
}

export const fetchGistFile = gist => dispatch => {
  dispatch(fileRequest({
    name: gist.file.filename,
    id: gist.id
  }))
  fetch(gist.file.raw_url)
    .then(res => res.text())
    .then(data => {
      dispatch(fileSuccess({
        id: gist.id,
        name: gist.file.filename,
        data
      }))
    })
    .catch(error => dispatch(fileFailure(error)))
}