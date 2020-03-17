import React from 'react';
import { setVisibilityFilter, VisibilityFilters } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

const FilterLink = ({ filter, children, onClick }) => {
  const active = useSelector( state => state.filter === filter );
  const dispatch = useDispatch();
  return (
    <button
      onClick={ () => dispatch( setVisibilityFilter(filter) ) }
      disabled={ active }
      style={ {
        marginLeft: '4px',
      } }
    >
      { children }
    </button>
  );
};

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
			All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
			Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
			Completed
    </FilterLink>
  </div>
);

export default Footer;
