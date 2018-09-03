import { combineReducers } from 'redux'
import example from './example'
import { searchText, showCompleted, todos } from './todo'
import { gists } from './gists'
import { gist } from './gist'

const rootReducer = combineReducers({
  example,
  searchText,
  showCompleted,
  todos,
  gists,
  gist
})

export default rootReducer