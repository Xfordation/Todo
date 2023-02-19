import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import Form from "./Form";
import Stack from "@mui/material/Stack";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddTask: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  // State
  const [open, setOpen] = React.useState<boolean>(false);

  // Functions
  // Open of Modal
  const handleOpen = (): void => setOpen(true);
  // Close Modal
  const handleClose = (): void => setOpen(false);

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="right"
        mb="2rem"
      >
        <Button
          onClick={handleOpen}
          variant="outlined"
          color="secondary"
          size="medium"
          endIcon={<AddIcon />}
        >
          Create New Task
        </Button>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            mb="2rem"
          >
            What is your main focus for today?
          </Typography>
          <Form
            todo={todo}
            setTodo={setTodo}
            handleAdd={handleAdd}
            handleClose={handleClose}
          />
        </Box>
      </Modal>
    </>
  );
};

export default AddTask;
