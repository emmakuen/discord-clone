import React from "react";
import { CircularProgress, Box } from "@mui/material";
import { colors } from "../../constants";

const Loader = () => {
  return (
    <Box
      sx={{
        backgroundColor: colors.primary,
        height: "100vh",
        width: "100vw",
        display: "flex",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress sx={{ color: "white" }} />
    </Box>
  );
};

export default Loader;
