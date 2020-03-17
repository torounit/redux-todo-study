const generateUuid = () => {
  let chars = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.split( '' );
  for ( let i = 0, len = chars.length; i < len; i ++ ) {
    switch ( chars[ i ] ) {
      case 'x':
        chars[ i ] = Math.floor( Math.random() * 16 ).toString( 16 );
        break;
      case 'y':
        chars[ i ] = ( Math.floor( Math.random() * 4 ) + 8 ).toString( 16 );
        break;
    }
  }
  return chars.join( '' );
};

export const TodoActions = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
};

export const filterActions = {
  SET_VISIBILITY_FILTER:'SET_VISIBILITY_FILTER'
};

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const addTodo = text => ({
  type: TodoActions.ADD_TODO,
  id: generateUuid(),
  text
});

export const toggleTodo = id => ({
  type: TodoActions.TOGGLE_TODO,
  id
});

export const setVisibilityFilter = filter => ({
  type: filterActions.SET_VISIBILITY_FILTER,
  filter
});
