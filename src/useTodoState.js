import { useState } from "react";

export default (initialValue) => {
  const [todos, setTodos] = useState(initialValue);
  // this is a separation of state logic and components which you can do with hooks helps you separate and keep things better contained for readability.
  return {
    todos,
    addTodo: (todoText) => {
      setTodos([...todos, todoText]);
    },
    deleteTodo: (todoIndex) => {
      const newTodos = todos.filter((_, index) => index !== todoIndex);

      setTodos(newTodos);
    },
  };
};
