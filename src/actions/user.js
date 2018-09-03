import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from '../constants/user'

import {
  getUser
} from '../api/get'

export const userRequest = () => ({
  type: FETCH_USER_REQUEST
})

export const userSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  payload: user
})

export const userFailure = error => ({
  type: FETCH_USER_FAILURE,
  payload: error
})

export const fetchUser = dispatch => {
  dispatch(userRequest())
  getUser()
    .then(data => dispatch(userSuccess(data)))
    .catch(error => dispatch(userFailure(error)))
}