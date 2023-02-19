import React from "react";
import { FormGroup, FormControlLabel } from "@mui/material";
import { MaterialUISwitch } from "./styles/MaterialUISwitch.styles";

interface Props {
  palletMode: "light" | "dark";
  setPalletMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}
const Toggle = ({ palletMode, setPalletMode }: Props) => {
  const handleMode = () => {
    setPalletMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  return (
    <FormGroup>
      <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} onClick={handleMode} />}
        label=""
      />
    </FormGroup>
  );
};

export default Toggle;
