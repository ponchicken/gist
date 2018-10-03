import {
  SET_ACTIVE_GIST,
  FILE_ADD,
  FILE_REMOVE,
  FILE_RENAME
} from '../constant'

import { createReducer } from '../helpers/createReducers'

const defaultState = {}

const setActiveGist = (state, action) => action.payload

export const fileAdd = (state) => {
  let gist = {...state}
  gist.files[`new-${Date.now()}`] = {
    filename: 'new',
    content: 'new',
    isNew: true
  }
  return gist
}

export const fileRemove = (state, action) => {
  let gist = {...state}
  let filename = action.payload
  let file = gist.files[filename]
  if (file.isNew) {
    delete gist.files[filename]
  } else {
    gist.files[filename] = null
  }
  return gist
}

export const fileRename = (state, action) => {
  let gist = {...state}
  let { target, filename } = action.payload
  gist.files[target].filename = filename
  return gist
}

export const gist = createReducer(defaultState, {
  [SET_ACTIVE_GIST]: setActiveGist,
  [FILE_ADD]: fileAdd,
  [FILE_REMOVE]: fileRemove,
  [FILE_RENAME]: fileRename
})