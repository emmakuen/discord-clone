import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const BoxWrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#5865f2",
});

const AuthBox = (props) => {
  return (
    <BoxWrapper>
      <Box
        sx={{
          width: 500,
          height: 400,
          background: "#36393f",
          borderRadius: "0.5rem",
          boxShadow: "0 0.2rem 1rem 0 rgba(0, 0, 0, 0.2)",
          display: "flex",
          flexDirection: "column",
          padding: "3.2rem",
          gap: "2rem",
        }}
      >
        {props.children}
      </Box>
    </BoxWrapper>
  );
};

export default AuthBox;
