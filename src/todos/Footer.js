import React from 'react';
import { ListGroup, ButtonGroup, Button } from 'react-bootstrap';
import * as todostatus from './status';

const Footer = ({ todoLength, currentFilter, filterTodo }) => {
  return (
    <ListGroup>
      <ListGroup.Item className="todo-summary">
        <div>
          {todoLength} <i> todos </i>
        </div>
        <ButtonGroup aria-label="Second group">
          <Button
            active={currentFilter === todostatus.ALL}
            size="sm"
            variant="outline-primary"
            onClick={() => filterTodo(todostatus.ALL)}
          >
            All
          </Button>
          <Button
            active={currentFilter === todostatus.ACTIVE}
            size="sm"
            variant="outline-danger"
            onClick={() => filterTodo(todostatus.ACTIVE)}
          >
            Active
          </Button>
          <Button
            active={currentFilter === todostatus.COMPLETED}
            size="sm"
            variant="outline-success"
            onClick={() => filterTodo(todostatus.COMPLETED)}
          >
            Completed
          </Button>
        </ButtonGroup>
        <div></div>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Footer;
