import React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid"; // Grid version 1
import { todoModel } from "../context/todoModel";
import TodoItem from "./TodoItem";

interface Props {
  todos: todoModel[];
  setTodos: React.Dispatch<React.SetStateAction<todoModel[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <>
      {todos.length === 0 ? (
        <Typography variant="h5" component="h5" textAlign="center">
          Add a Todo to get started.
        </Typography>
      ) : (
        <Grid
          container
          rowSpacing={{ xs: 1, sm: 2, md: 3 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          paddingTop="2rem"
        >
          {todos.map((todo) => (
            <TodoItem
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              key={todo.id}
            />
          ))}
        </Grid>
      )}
    </>
  );
};
export default TodoList;
