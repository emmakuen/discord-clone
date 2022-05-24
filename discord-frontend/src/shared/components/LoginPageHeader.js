import React from "react";
import { Typography } from "@mui/material";

const LoginPageHeader = () => {
  return (
    <>
      <Typography variant="h5" sx={{ color: "#fff" }}>
        Welcome back!
      </Typography>
      <Typography sx={{ color: "#b9bbbe" }}>
        We're so excited to see you again!
      </Typography>
    </>
  );
};

export default LoginPageHeader;
