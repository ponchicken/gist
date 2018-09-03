import { 
  SET_SEARCH_TEXT, 
  ADD_TODO,
  TOGGLE_SHOW_COMPLETED,
  TOGGLE_TODO
 } from '../constants/todo'

 import * as gists from '../constants/gists'


export const setSearchText = searchText => ({
  type: SET_SEARCH_TEXT,
  searchText
})

export const addTodo = text => ({
  type: ADD_TODO,
  text
})

export const toggleShowCompleted = () => ({
  type: TOGGLE_SHOW_COMPLETED
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})

export const gistsRequest = user => ({
  type: gists.GISTS_FETCH_REQUEST,
  user
})

export const gistsSuccess = list => ({
  type: gists.GISTS_FETCH_SUCCESS,
  list
})

export const gistsFailure = error => ({
  type: gists.GISTS_FETCH_FAILURE,
  error
})

export const fetchGists = user => dispatch => {
  let token = localStorage.getItem('token')
  let token_param = token ? `?access_token=${token}` : ''
  dispatch(gistsRequest(user))
  return fetch(`https://api.github.com/users/ponchicken/gists${token_param}`)
    .then(
      res => res.json(),
      error => console.log('An error occured. ', error)
    )
    .then(list => {
      dispatch(gistsSuccess(list))
    })
}