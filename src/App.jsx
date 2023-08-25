import { Stack } from "@mui/material";
import { TaskApp } from "./components/TaskApp";

export const App = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "90vh",
        alignItems: "center",
      }}
    >
      <TaskApp />
    </Stack>
  );
};
