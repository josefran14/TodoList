import { Box, Typography } from "@mui/material";
import { useTask } from "../hooks/useTask";
import { ButtonDelete } from "./ButtonDelete";
import { CreatorTask } from "./CreatorTask";
import { GetTask } from "./GetTask";

export const TaskApp = () => {
  const {
    task,
    handleAddTask,
    completedTodos,
    handleDelete,
    handleChange,
    handleSubmit,
    handleToggle,
  } = useTask();

  return (
    <>
      <Box
        sx={{
          width: "62%",
          height: "20%",
          background: "#334155",
          display: "flex",
          borderRadius: "20px",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px"
        }}
      >
        <Typography variant="h4" sx={{ color: "white", fontFamily: "cursive" }}>
          TodoApp: {task.length},{" "}
          <small>Pendientes: {task.filter((todo) => !todo.done).length}</small>
        </Typography>
        <Typography variant="h6" sx={{ color: "white", fontFamily: "cursive" }}>
          App de tareas Francisco Saavedra
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundImage:
            "url(https://as1.ftcdn.net/v2/jpg/00/61/20/06/1000_F_61200666_AVRvNzEvYTJC2am6bX0lZAWUE1tcGlwH.jpg)",
          width: "60%",
          minHeight: "300px",
          padding: "10px",
          borderRadius: "20px",
          marginTop: "16px",
        }}
      >
        <CreatorTask
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleAddTask={handleAddTask}
        />

        {task.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <GetTask
              item={item}
              handleToggle={handleToggle}
              completedTodos={completedTodos}
            />

            <ButtonDelete handleDelete={handleDelete} item={item.id} />
          </Box>
        ))}
      </Box>
    </>
  );
};
