import { Box, Button, TextField, Typography } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useState } from "react";

export const TaskCreator = ({
  handleChange,
  handleSubmit,
  task,
  text,
  setTask,
}) => {
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleClick = (value) => {
    setTask(task.filter((item) => item !== value));
  };

  function handleToggle(todo) {
    if (completedTodos.includes(todo)) {
      setCompletedTodos(completedTodos.filter((item) => item !== todo));
    } else {
      setCompletedTodos([...completedTodos, todo]);
    }
  }

  // Estado con el valor de los indice de los checkbox

  return (
    <Box sx={{display: "flex", justifyContent: "center", backgroundImage: "url(https://as1.ftcdn.net/v2/jpg/00/61/20/06/1000_F_61200666_AVRvNzEvYTJC2am6bX0lZAWUE1tcGlwH.jpg)", width: "80%", minHeight: "300px", padding: "10px",}}>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{backgroundColor: "#b3b3b3"}}
          onChange={handleChange}
          type="text"
          variant="filled"
          placeholder="Ingrese una tarea"
          value={text}
        />

        <Button onClick={handleSubmit} variant="outlined" sx={{height: "55px"}}>
          Add
        </Button>

        {task.map((item) => (
          <Box key={item} sx={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px"}}>
            <input type="checkbox" onChange={() => handleToggle(item)} />{" "}
            <Typography
              sx={{
                textDecoration: completedTodos.includes(item)
                  ? "line-through"
                  : "none",
                  color: "black",
                  
              }}
            >
              {" "}
              {item}{" "}
            </Typography>{" "}
            <Button onClick={() => handleClick(item)} color="error">
              {" "}
              <HighlightOffIcon />{" "}
            </Button>
          </Box>
        ))}
      </form>

      {/* <ul>
        {tasks.map((item) => (
          <li
            key={item}
            style={{
              textDecoration: completedTodos.includes(item)
                ? "line-through"
                : "none",
            }}
          >
            {item} <button onClick={() => console.log("eliminar")}>XXX</button>
            <input
              type="checkbox"
               onChange={() => handleToggle(item)}
            />
          </li>
        ))}
</ul> */}
    </Box>
  );
};
