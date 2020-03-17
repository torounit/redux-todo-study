import React from 'react';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Footer from './components/Footer';


const App = () => (
  <div>
    <AddTodo/>
    <TodoList />
    <Footer/>
  </div>
);

export default App;
