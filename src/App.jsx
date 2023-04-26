import { Stack } from "@mui/material"
import { TaskApp } from "./components/TaskApp"

export const App = () => {

  return (
    <Stack sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <TaskApp/>
    </Stack>
  )
}