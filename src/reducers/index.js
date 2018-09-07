import { combineReducers } from 'redux'
import { gists } from './gists'
import { gist } from './gist'
import { user } from './user'

const rootReducer = combineReducers({
  gists,
  user,
  gist
})

export default rootReducer