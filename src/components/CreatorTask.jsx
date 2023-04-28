import { Box, Button, TextField } from "@mui/material"
import { useState } from "react"

export const CreatorTask = ({handleAddTask}) => {

  const [text, setText] = useState("")

  const handleChange = (e) =>{
    setText(e.target.value)
 }

 const handleSubmit = (e) =>{
    e.preventDefault()
    if(text.trim().length <= 2) return
    handleAddTask(text)
    setText("")
 }

  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <form onSubmit={handleSubmit}>

        <TextField
          sx={{backgroundColor: "#b3b3b3"}}
          onChange={handleChange}
          type="text"
          variant="standard"
          placeholder="Ingrese una tarea"
          value={text}
        />

        <Button onClick={handleSubmit} variant="contained" sx={{marginLeft: "20px"}}>
          Add
        </Button>

        </form>
    </Box>
  )
}
