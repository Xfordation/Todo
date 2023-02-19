import React from "react";
import TextField from "@mui/material/TextField";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import { IconButton } from "@mui/material";
import Stack from "@mui/material/Stack";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
  handleClose: () => void;
}

const Form: React.FC<Props> = ({ todo, setTodo, handleAdd, handleClose }) => {
  return (
    <Stack
      component="form"
      direction="row"
      gap="1.5rem"
      alignItems="center"
      width="100%"
      onSubmit={(e) => {
        handleAdd(e);
        handleClose();
      }}
      autoComplete="off"
    >
      <TextField
        value={todo}
        id="standard-basic"
        label="Work on Client Website"
        variant="standard"
        onChange={(e) => setTodo(e.target.value)}
      />
      <IconButton
        type="submit"
        color="secondary"
        component="button"
        size="large"
        disabled={todo?.length > 0 ? false : true}
      >
        <SendSharpIcon />
      </IconButton>
    </Stack>
  );
};

export default Form;
