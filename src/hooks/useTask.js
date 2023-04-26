import { useState } from "react";

export const useTask = () => {
    
    const [task, setTask] = useState([])
  
    const [completedTodos, setCompletedTodos] = useState([]);
  
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
   
   
     const handleToggle = (todo) =>{
       if (completedTodos.includes(todo)) {
         setCompletedTodos(completedTodos.filter((item) => item !== todo));
       } else {
         setCompletedTodos([...completedTodos, todo]);
       }
     }

     return {
        task: task,
        text: text,
        completedTodos: completedTodos,
        setTask: setTask,
        handleDelete: handleDelete,
        handleChange: handleChange,
        handleSubmit: handleSubmit,
        handleToggle: handleToggle
     }
}
