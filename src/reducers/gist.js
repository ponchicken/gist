
// const getNewGistState = (state, action) => cb => {
//   let newState = {...state}
//   let gist = action.payload
//   let index = state.data.findIndex(item => item.id === gist.id)
//   newState.data[index] = cb(gist)
//   return newState
// }

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
  file.content = data
  return newState
}

export const fetchGistFileFailure = (state, action) => {
  return state
}

export const changeGist = (state, action) => {
  let newState = {...state}
  let gist = action.payload
  gist.changed = true
  let index = state.data.findIndex(item => item.id === gist.id)
  newState.data[index] = gist
  return newState
}

export const updateGistSuccess = (state, action) => {
  let newState = {...state}
  let gist = action.payload
  gist.changed = false
  let index = state.data.findIndex(item => item.id === gist.id)
  newState.data[index] = gist
  return newState
}

export const updateGistError = (state, action) => {
  let newState = {...state}
  let gist = action.payload
  gist.changed = false
  let index = state.data.findIndex(item => item.id === gist.id)
  newState.data[index] = gist
  return newState
}

export const fileAdd = (state, action) => {
  let newState = {...state}
  let gist = action.payload
  gist.files['new'] = {
    filename: 'new',
    content: ''
  }
  let index = state.data.findIndex(item => item.id === gist.id)
  newState.data[index] = gist
  return newState
}

export const fileRemove = (state, action) => {
  let newState = {...state}
  let { gist, filename } = action.payload
  gist.files[filename] = null
  let index = state.data.findIndex(item => item.id === gist.id)
  newState.data[index] = gist
  return newState
}
