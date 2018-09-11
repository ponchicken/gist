// import { fileRequest } from '../actions/gist';


export const setActiveGist = (state, action) => ({
  ...state,
  active: action.payload
})
export const fetchGistFileRequest = (state, action) => {
  let {
    name, id
  } = action.payload
  let newState = {...state}

  let gistIndex = newState.data.findIndex(gist => gist.id === id)
  let file = newState.data[gistIndex].files[name]
  file.pending = true
  return newState
}

export const fetchGistFileSuccess = (state, action) => {
  let {
    id, name, data
  } = action.payload
  let newState = {...state}
  let gistIndex = newState.data.findIndex(gist => gist.id === id)
  let file = newState.data[gistIndex].files[name]
  file.pending = false
  file.data = data
  return newState
}

export const fetchGistFileFailure = (state, action) => {
  return state
}