import { Stack } from "@mui/material"
import { useEffect, useState } from "react"
import { TaskCreator } from "./components/TaskCreator"

export const App = () => {

  const [task, setTask] = useState([])

  const [text, setText] = useState("")

  const handleDelete = (value) =>{
    setTask(task.filter((item) => item !== value))
  }

  const handleChange = (e) =>{
     setText(e.target.value)
  }

  const handleSubmit = (e) =>{
     e.preventDefault()
     if(text.trim().length <= 2) return
     setTask([...task, text])
     setText("")
  }

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
    <Stack sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <TaskCreator 
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      task={task}
      text={text}
      handleDelete={handleDelete}/>
    </Stack>
  )
}



// import Head from 'next/head';
// import React, { useState, useEffect } from 'react';
// const Home = () => {
//    const [checkboxValues, setCheckboxValues] = useState([]);

//   function handleCheckboxChange(event) {
//     const { value, checked } = event.target;
//     if (checked) {
//       setCheckboxValues([...checkboxValues, value]);
//     } else {
//       const newCheckboxValues = checkboxValues.filter(
//         (checkboxValue) => checkboxValue !== value
//       );
//       setCheckboxValues(newCheckboxValues);
//     }
//   }
//   console.log('estado Array', checkboxValues);
//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           value="Luis"
//           checked={checkboxValues.includes('Luis')}
//           onChange={handleCheckboxChange}
//         />
//         Luis
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           value={list.id}
//           checked={checkboxValues.includes('Pedro')}
//           onChange={handleCheckboxChange}
//         />
//         Pedro
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           value="Francisco"
//           checked={checkboxValues.includes('Francisco')}
//           onChange={handleCheckboxChange}
//         />
//         Francisco
//       </label>
//       <p>Selected values: {checkboxValues.join(', ')}</p>
//     </div>
//   );
// };