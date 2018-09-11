import { combineReducers } from 'redux'
import { gists } from './gists'
import { user } from './user'
import { login } from './login'

const rootReducer = combineReducers({
  gists,
  user,
  login
})

export default rootReducer