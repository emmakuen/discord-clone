import { Button } from "@mui/material";
import { colors } from "../../constants";

const PrimaryButton = ({ label, additionalStyles, disabled, onClick }) => {
  return (
    <Button
      variant="contained"
      sx={{
        background: colors.primary,
      }}
    >
      {label}
    </Button>
  );
};

export default PrimaryButton;
