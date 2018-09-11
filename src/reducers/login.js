import {
  FETCH_GH_TOKEN_REQUEST,
  FETCH_GH_TOKEN_SUCCESS,
  FETCH_GH_TOKEN_ERROR,
  LOGOUT
} from '../constans'


import { createReducer } from '../helpers/createReducers'

const defaultState = {
  pending: false,
  token: '',
  error: {},
  isAuth: false
}

const fetchGhTokenRequest = (state) => ({
  ...state,
  pending: true
})

const fetchGhTokenSuccess = (state, action) => ({
  pending: false,
  token: action.payload,
  error: defaultState.error,
  isAuth: true
})

const fetchGhTokenError = (state, action) => ({
  ...state,
  pending: false,
  error: action.payload
})

const logout = (state) => ({
  ...state,
  token: defaultState.token,
  isAuth: false
})

export const login = createReducer(defaultState, {
  [FETCH_GH_TOKEN_REQUEST]: fetchGhTokenRequest,
  [FETCH_GH_TOKEN_SUCCESS]: fetchGhTokenSuccess,
  [FETCH_GH_TOKEN_ERROR]: fetchGhTokenError,
  [LOGOUT]: logout
})
