import React from "react";
import { Box } from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";
import { colors } from "../../../constants";

const OnlineIndicator = () => {
  return (
    <Box
      sx={{
        color: colors.secondary,
        display: "flex",
        alignItems: "center",
        position: "absolute",
        right: "0.5rem",
      }}
    >
      <FiberManualRecord />
    </Box>
  );
};

export default OnlineIndicator;
