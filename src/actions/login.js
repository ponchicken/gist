import {
  FETCH_GH_TOKEN_REQUEST,
  FETCH_GH_TOKEN_SUCCESS,
  FETCH_GH_TOKEN_ERROR,
  LOGOUT
} from '../constans'

import queryString from 'query-string'

const tokenRequest = () => ({
  type: FETCH_GH_TOKEN_REQUEST
})

const tokenSuccess = (token) => ({
  type: FETCH_GH_TOKEN_SUCCESS,
  payload: token
})

const tokenError = (error) => ({
  type: FETCH_GH_TOKEN_ERROR,
  payload: error,
  error: true
})

export const logout = () => {
  localStorage.removeItem('ghtoken')
  return {
    type: LOGOUT
  }
}

export const getGhCode = (dispatch) => {
  let query = queryString.stringify({
    client_id: '169a193bbe75c0e129d0',
    scope: 'gist'
  })
  let link = `https://github.com/login/oauth/authorize?${query}`
  window.location.href = link
}

export const fetchToken = dispatch => {
  const urlParams = queryString.parse(window.location.search)
  if (!urlParams.code) return
  const query = queryString.stringify({
    code: urlParams.code
  })
  const url = `http://localhost:3000/callback?${query}`
  dispatch(tokenRequest())

  fetch(url)
    .then(res => res.json())
    .then(data => {
      let { access_token, error } = data.token
      if (error) {
        dispatch(tokenError(error))
        return
      }
      localStorage.setItem('ghtoken', access_token)
      dispatch(tokenSuccess(access_token))
    })
}
