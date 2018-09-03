import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleTodo } from '../actions';
import TodoItem from '../components/TodoItem';

class Todo extends Component {

  handleSubmit = e => {
    e.preventDefault()
    let { dispatch } = this.props
    let { todoText } = this.refs

    dispatch(addTodo(todoText.value))
    todoText.value = ''
  }

  toggleTodo = (id) => () => {
    this.props.dispatch(toggleTodo(id))
  }

  renderTodoList = () => {
    return this.props.todos.map(item => <TodoItem 
        key={item.id} 
        text={item.text}
        toggleTodo={this.toggleTodo(item.id)}
        completed={item.completed}
      />
    )
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="todo" ref="todoText" />
          <button type="submit">submit</button>
        </form>
        <ul>
          { this.renderTodoList() }
        </ul>
      </div>
    )
  }

}

const mapState = ({ todos }) => ({
  todos
})

export default connect(mapState)(Todo)
