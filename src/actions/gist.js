import {
  SET_ACTIVE_GIST,
  FETCH_GIST_FILE_REQUEST,
  FETCH_GIST_FILE_SUCCESS,
  FETCH_GIST_FILE_ERROR
} from '../constants/gist'

export const setActiveGist = gist => ({
  type: SET_ACTIVE_GIST,
  payload: gist
})

export const fileRequest = name => ({
  type: FETCH_GIST_FILE_REQUEST,
  payload: name
})

export const fileSuccess = data => ({
  type: FETCH_GIST_FILE_SUCCESS,
  payload: data
})

export const fileFailure = error => ({
  type: FETCH_GIST_FILE_ERROR,
  payload: error
})

export const fetchGistFile = file => dispatch => {
  dispatch(fileRequest(file.filename))
  fetch(file.raw_url)
    .then(res => res.text())
    .then(data => {
      console.log(file)
      dispatch(fileSuccess({
        name: file.filename,
        data
      }))
    })
    // .catch(error => fileFailure(error))
} 