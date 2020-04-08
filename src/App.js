import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import ToDoForm from "./TodoForm";
import TodoList from "./TodoList";
import useTodoState from "./useTodoState";

const App = () => {
  const { todos, addTodo, deleteTodo } = useTodoState(
    localStorage.getItem(Object.keys("myValueInLocalStorage")) || []
  );


  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>

      <ToDoForm
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />

      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
