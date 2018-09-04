import { combineReducers } from 'redux'
import { gists } from './gists'
import { user } from './user'

const rootReducer = combineReducers({
  gists,
  user
})

export default rootReducer