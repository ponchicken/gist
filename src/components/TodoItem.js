import React from 'react'

export default ({ text, completed, toggleTodo }) => {
  return (
    <li 
      onClick={toggleTodo} 
      className={
        completed ? 'completed' : ''
      }
    >
      {text}
    </li>
  )
}
