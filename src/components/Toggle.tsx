import React from "react";
import { FormGroup, FormControlLabel } from "@mui/material";
import { MaterialUISwitch } from "./styles/MaterialUISwitch.styles";

interface Props {
  mode: "light" | "dark";
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  toggle: () => void;
  isDarkMode: boolean;
}
const Toggle = ({ mode, setMode, toggle, isDarkMode }: Props) => {
  const handleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    toggle();
  };
  return (
    <FormGroup>
      <MaterialUISwitch
        sx={{ m: 1 }}
        checked={isDarkMode}
        onClick={handleMode}
      />
    </FormGroup>
  );
};

export default Toggle;
