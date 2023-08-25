import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

export const CreatorTask = ({ handleAddTask }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length <= 2) return;
    const newTask = {
      id: new Date().getTime(),
      todo: text,
      done: false,
    };
    handleAddTask(newTask);
    setText("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          type="text"
          label="New Task"
          placeholder="Enter a task"
          value={text}
        />
      </form>
    </Box>
  );
};
