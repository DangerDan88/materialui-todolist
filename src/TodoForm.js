import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./useInputState";
const ToDoForm = ({ saveTodo }) => {
  const {value, reset, onChange} = useInputState("");
  return (
    <form
      onSubmit={(event) => {
        //onsubmit handler triggers event to saveTodo then reset the value to empty strings so input box does not keep text from previous entry.
        event.preventDefault();
        saveTodo(value);
        reset("");
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default ToDoForm;
