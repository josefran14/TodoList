import { Box, Typography } from "@mui/material";

export const GetTask = ({ item, handleToggle, completedTodos }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10px",
      }}
    >
      <Typography
        variant="h5"
        onClick={() => handleToggle(item.id)}
        sx={{
          textDecoration: item.done ? "line-through" : "none",
          fontFamily: "cursive",
        }}
      >
        {item.todo}
      </Typography>
    </Box>
  );
};
