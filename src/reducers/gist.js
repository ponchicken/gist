
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
  Object.keys(gist.files).forEach(key => {
    if (gist.files[key] === null)
      delete gist.files[key]
  })

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
  gist.files[`new-${Date.now()}`] = {
    filename: 'new',
    content: 'content',
    isNew: true
  }
  let index = state.data.findIndex(item => item.id === gist.id)
  newState.data[index] = gist
  return newState
}

export const fileRemove = (state, action) => {
  let newState = {...state}
  let { gist, filename } = action.payload
  let file = gist.files[filename]
  if (file.isNew) {
    delete gist.files[filename]
  } else {
    gist.files[filename] = null
  }
  let index = state.data.findIndex(item => item.id === gist.id)
  newState.data[index] = gist
  return newState
}

export const fileRename = (state, action) => {
  let newState = {...state}
  let { gist, target, filename } = action.payload
  gist.files[target].filename = filename
  let index = state.data.findIndex(item => item.id === gist.id)
  newState.data[index] = gist
  return newState
}

export const gistAdd = (state, action ) => {
  let newState = {...state}
  newState.data.push(action.payload)
  return newState
}

export const gistDelete = (state, action) => {
  let newState = {...state}
  let id = action.payload
  let index = state.data.findIndex(item => item.id === id)
  newState.data[index].deleted = true
  return newState
}
