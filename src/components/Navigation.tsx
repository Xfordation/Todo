import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Toggle from "./Toggle";

interface Props {
  mode: "light" | "dark";
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  toggle: () => void;
  isDarkMode: boolean;
}
const Navigation = ({ mode, setMode, toggle, isDarkMode }: Props) => {
  return (
    <Box sx={{ flexGrow: 1, mb: "2rem" }}>
      <AppBar position="static">
        <Container maxWidth="md">
          <Toolbar>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
              width="100%"
            >
              <Typography
                variant="h5"
                component="div"
                textTransform="uppercase"
              >
                ToDo
              </Typography>
              <Toggle
                mode={mode}
                setMode={setMode}
                toggle={toggle}
                isDarkMode={isDarkMode}
              />
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navigation;
