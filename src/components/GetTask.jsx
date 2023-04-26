import { Box, Typography } from "@mui/material"

export const GetTask = ({item, handleToggle, completedTodos}) => {
  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px"}}>
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
    </Box>
  )
}
