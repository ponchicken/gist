import { combineReducers } from 'redux'
import { gists } from './gists'
import { gist } from './activeGist'
import { user } from './user'
import { login } from './login'

const rootReducer = combineReducers({
  gists,
  gist,
  user,
  login,
})

export default rootReducer