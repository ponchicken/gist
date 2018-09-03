import {
  // GIST_FETCH_FAILURE,
  GIST_FETCH_REQUEST,
  GIST_FETCH_SUCCESS
} from '../constants/gist'

export const gistRequest = id => ({
  type: GIST_FETCH_REQUEST,
  id
})

export const gistSuccess = gist => {
  return {
    type: GIST_FETCH_SUCCESS,
    gist
  }
}

export const gistFetch = id => dispatch => {
  dispatch(gistRequest(id))
  fetch(`https://api.github.com/gists/${id}`)
    .then(res => res.json())
    .then(gist => {
      dispatch(gistSuccess(gist))
    })
}