import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo, VisibilityFilters } from '../actions';

const Todo = ( { onClick, completed, text } ) => (
  <li
    onClick={ onClick }
    style={ {
      textDecoration: completed ? 'line-through' : 'none'
    } }
  >
    { text }
  </li>
);

const getTodos = ( state ) => {
  const { filter, todos } = state;
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const TodoList = () => {
  const todos = useSelector( getTodos );
  const dispatch = useDispatch();
  return (
    <ul>
      { todos.map( todo =>
        <Todo
          key={ todo.id }
          { ...todo }
          onClick={ () => dispatch( toggleTodo( todo.id ) ) }
        />
      ) }
    </ul>
  );
};

export default TodoList;
