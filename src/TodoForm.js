import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const ToDoForm = ({ saveTodo }) => {
  const [value, setValue] = useState("");
  return (
    <form
      onSubmit={(event) => {
        //onsubmit handler triggers event to saveTodo
        event.preventDefault();
        saveTodo(value);
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={(event) => {
          //onChange event that sets the value based on user input into TextField by checking event target value.
          setValue(event.target.value);
        }}
        value={value}
      />
    </form>
  );
};

export default ToDoForm;
