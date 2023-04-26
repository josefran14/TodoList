import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useTask } from "../hooks/useTask";
import { ButtonDelete } from "./ButtonDelete";
import { CreatorTask } from "./CreatorTask";
import { GetTask } from "./GetTask";

export const TaskApp = () => {

  const {task, text, completedTodos, setTask, handleDelete,handleChange,handleSubmit, handleToggle} = useTask()

  useEffect(() => {
    let data = localStorage.getItem("tasks")
     if(data) {
      setTask(JSON.parse(data)) 
     }
  }, [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task))
  }, [task]);

  return (
    <Box sx={{ backgroundImage: "url(https://as1.ftcdn.net/v2/jpg/00/61/20/06/1000_F_61200666_AVRvNzEvYTJC2am6bX0lZAWUE1tcGlwH.jpg)", width: "80%", minHeight: "300px", padding: "10px",}}>

        <CreatorTask handleSubmit={handleSubmit} handleChange={handleChange} text={text}/>
      
        {task.map((item) => (
          <Box key={item} sx={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px"}}>

            <GetTask item={item} handleToggle={handleToggle} completedTodos={completedTodos}/>

            <ButtonDelete handleDelete={handleDelete} item={item}/>

          </Box>
        ))}
    </Box>
  );
};
