import { TodoActions, filterActions, VisibilityFilters } from '../actions';
import { combineReducers } from 'redux';

const todos = ( state = [], action ) => {
  switch ( action.type ) {
    case TodoActions.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case TodoActions.TOGGLE_TODO:
      return state.map( todo =>
        ( todo.id === action.id )
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

const filter = ( state = VisibilityFilters.SHOW_ALL, action ) => {
  switch ( action.type ) {
    case filterActions.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export const reducers = combineReducers( {
  todos,
  filter
} );
