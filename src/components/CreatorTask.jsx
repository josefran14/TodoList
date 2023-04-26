import { Box, Button, TextField } from "@mui/material"

export const CreatorTask = ({handleSubmit, handleChange, text}) => {
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
