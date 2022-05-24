import { Button } from "@mui/material";
import { colors } from "../../constants";

const PrimaryButton = ({ label, additionalStyles, ...otherProps }) => {
  return (
    <Button
      variant="contained"
      sx={{
        background: colors.primary,
        color: colors.text,
        textTransform: "none", //override mui
        fontSize: "1.6rem",
        fontWeight: 600,
        width: "100%",
        padding: "1rem",
      }}
      style={additionalStyles ? additionalStyles : {}}
      {...otherProps}
    >
      {label}
    </Button>
  );
};

export default PrimaryButton;
