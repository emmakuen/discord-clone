import React from "react";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

const Wrapper = styled("div")({
  textAlign: "center",
});

const LoginPageHeader = () => {
  return (
    <Wrapper>
      <Typography
        variant="h5"
        sx={{
          color: "#fff",
          marginBottom: "0.2rem",
          fontWeight: 600,
          fontSize: "3.2rem",
        }}
      >
        Welcome back!
      </Typography>
      <Typography sx={{ color: "#b9bbbe", fontSize: "1.4rem" }}>
        We're so excited to see you again!
      </Typography>
    </Wrapper>
  );
};

export default LoginPageHeader;
