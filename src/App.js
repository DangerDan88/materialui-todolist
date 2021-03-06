import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import ToDoForm from "./TodoForm";
import TodoList from "./TodoList";
import useTodoState from "./useTodoState";

const App = () => {
  const local = [...localStorage.getItem("myValueInLocalStorage")];

  const { todos, addTodo, deleteTodo } = useTodoState(local || []);

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Dan's Todo List
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
