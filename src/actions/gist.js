import {
  SET_ACTIVE_GIST,
  FETCH_GIST_FILE_REQUEST,
  FETCH_GIST_FILE_SUCCESS,
  FETCH_GIST_FILE_FAILURE
} from '../constants/gist'

export const setActiveGist = id => ({
  type: SET_ACTIVE_GIST,
  payload: id
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