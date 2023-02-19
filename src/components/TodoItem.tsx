import React from "react";
import Grid from "@mui/material/Grid"; // Grid version 1
import {
  Card,
  CardContent,
  IconButton,
  Typography,
  TextField,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import CheckTwoToneIcon from "@mui/icons-material/CheckTwoTone";
import SendSharpIcon from "@mui/icons-material/SendSharp";

import { todoModel } from "../context/todoModel";

interface Props {
  todo: todoModel;
  todos: todoModel[];
  setTodos: React.Dispatch<React.SetStateAction<todoModel[]>>;
}

const TodoItem = ({ todo, todos, setTodos }: Props) => {
  // State
  const [edit, setEdit] = React.useState<boolean>(false);
  const [editTodo, setEditTodo] = React.useState<string>(todo.todo);

  // Function to Handle Completed Todo
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  // Function to Delete a Todo
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Function to Edit a Todo
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  return (
    <Grid item xs={12}>
      <Card>
        <CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
          >
            {edit ? (
              <form onSubmit={(e) => handleEdit(e, todo.id)}>
                <TextField
                  id="standard-basic"
                  label="Edit Todo"
                  variant="standard"
                  value={editTodo}
                  onChange={(e) => setEditTodo(e.target.value)}
                />
                <IconButton
                  type="submit"
                  color="secondary"
                  component="button"
                  size="large"
                  disabled={editTodo.length <= 5 ? true : false}
                >
                  <SendSharpIcon />
                </IconButton>
              </form>
            ) : todo.isDone ? (
              <Typography variant="h5" component="s" textTransform="capitalize">
                {todo.todo}
              </Typography>
            ) : (
              <Typography
                variant="h5"
                component="div"
                textTransform="capitalize"
              >
                {todo.todo}
              </Typography>
            )}
            <Stack direction="row" alignItems="center" gap="0.5rem">
              {edit ? null : (
                <>
                  <IconButton
                    component="button"
                    type="button"
                    size="medium"
                    sx={{
                      "&:hover": {
                        transition: "ease-in 0.2s",
                        color: "rgb(255, 234, 0)",
                        bgcolor: "rgba(139, 127, 0, 0.1)",
                      },
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      if (!edit && !todo.isDone) {
                        setEdit(!edit);
                      }
                    }}
                  >
                    <EditTwoToneIcon />
                  </IconButton>
                  <IconButton
                    component="button"
                    type="button"
                    size="medium"
                    sx={{
                      "&:hover": {
                        transition: "ease-in 0.2s",
                        color: "rgba(139, 0, 0, 0.9)",
                        bgcolor: "rgba(139, 0, 0, 0.1)",
                      },
                    }}
                    onClick={() => handleDelete(todo.id)}
                  >
                    <DeleteOutlineTwoToneIcon />
                  </IconButton>
                  <IconButton
                    component="button"
                    type="button"
                    size="medium"
                    sx={{
                      "&:hover": {
                        transition: "ease-in 0.2s",
                        color: "rgb(0, 100, 0)",
                        bgcolor: "rgba(0, 100, 0, 0.1)",
                      },
                    }}
                    onClick={() => handleDone(todo.id)}
                  >
                    <CheckTwoToneIcon />
                  </IconButton>
                </>
              )}
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TodoItem;
