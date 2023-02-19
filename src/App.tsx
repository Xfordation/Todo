import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Navigation from "./components/Navigation";
import { Container } from "@mui/system";
import AddTask from "./components/AddTask";
import { todoModel } from "./context/todoModel";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  // State
  const [palletMode, setPalletMode] = React.useState<"light" | "dark">("light");
  const [todo, setTodo] = React.useState<string>("");
  const [todos, setTodos] = React.useState<todoModel[]>([]);
  // theme
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: palletMode,
        },
      }),
    [palletMode]
  );
  // Add Task
  const handleAdd = (e: React.FormEvent): void => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation palletMode={palletMode} setPalletMode={setPalletMode} />
      <Container maxWidth="md">
        <AddTask todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
