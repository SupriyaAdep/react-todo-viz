import React from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import { DeleteIcon } from '../Icons';

const Todo = ({ todos, toggleTodo }) =>
  todos.length > 0 ? (
    todos.map(todo => (
      <ListGroup.Item className="list-group-custom" key={todo.id}>
        <Form.Check
          key={todo.id}
          custom
          inline
          label=""
          type="checkbox"
          id={`custom-inline-${'checkbox'}-${todo.id}`}
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <p className={`todo-text ${todo.completed ? 'todo-complete' : ''}`}>
          {todo.text}
        </p>
        <div className="todo-action">
          <DeleteIcon />
        </div>
      </ListGroup.Item>
    ))
  ) : (
    <ListGroup.Item>No todos found</ListGroup.Item>
  );

export default Todo;
