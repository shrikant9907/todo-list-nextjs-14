import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.slice().reverse().map((todo, index) => (
        <TodoItem key={index} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
