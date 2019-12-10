import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import Todo from './Todo';

class VisibleTodoList extends Component {
  render() {
    const { todos, currentFilter, toggleTodo } = this.props;
    const filteredTodos = todos.filter(todo => todo.status === currentFilter);
    return (
      <ListGroup>
        {currentFilter === 'ALL' ? (
          <Todo todos={todos} toggleTodo={toggleTodo} />
        ) : (
          <Todo todos={filteredTodos} toggleTodo={toggleTodo} />
        )}
      </ListGroup>
    );
  }
}

export default VisibleTodoList;
