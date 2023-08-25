import { useEffect, useState } from "react";

export const useTask = () => {
    
    const [task, setTask] = useState([])
  
    // const [completedTodos, setCompletedTodos] = useState([]);

    useEffect(() => {
      let data = localStorage.getItem("tasks")
       if(data) {
        setTask(JSON.parse(data)) 
       }
    }, [])
  
    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(task))
    }, [task]);

    const handleDelete = (id) =>{
        setTask(task.filter((item) => item.id !== id))
      }

    const handleAddTask = (newTask) =>{
      setTask([...task, newTask])
    }
   
     const handleToggle = (todoId) =>{
      setTask(task.map((todo) =>{
        if(todo.id === todoId){
            return {
                ...todo,
                done: !todo.done
            }
        }
        return todo
    }))
     }

     return {
        task: task,
        handleDelete: handleDelete,
        handleAddTask: handleAddTask,
        handleToggle: handleToggle
     }
}
