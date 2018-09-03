import {
  ADD_TODO,
  SET_SEARCH_TEXT,
  TOGGLE_SHOW_COMPLETED,
  TOGGLE_TODO
} from '../constants/todo'

export const searchText = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return action.searchText
    default:
      return state
  }
}

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.length++ || 0,
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map(item => {
        if (item.id === action.id) {
          let completed = !item.completed
          return {
            ...item,
            completed
          }
        }
        return item
      })
    default: 
      return state
  }
}

export const showCompleted = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_SHOW_COMPLETED:
      return !state
    default:
      return state
  }
}