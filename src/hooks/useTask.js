import { useEffect, useState } from "react";

export const useTask = () => {
    
    const [task, setTask] = useState([])
  
    const [completedTodos, setCompletedTodos] = useState([]);

    useEffect(() => {
      let data = localStorage.getItem("tasks")
       if(data) {
        setTask(JSON.parse(data)) 
       }
    }, [])
  
    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(task))
    }, [task]);

    const handleDelete = (value) =>{
        setTask(task.filter((item) => item !== value))
      }

    const handleAddTask = (newTask) =>{
      setTask([...task, newTask])
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
        completedTodos: completedTodos,
        handleDelete: handleDelete,
        handleAddTask: handleAddTask,
        handleToggle: handleToggle
     }
}
