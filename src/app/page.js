"use client"

import { useState } from 'react';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import './globals.css';

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (todoToDelete) => {
    setTodos(todos.filter(todo => todo !== todoToDelete));
  };

  return (
    <div className='todolist-next14'>
      <h1>Todo List - Next JS 14</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}