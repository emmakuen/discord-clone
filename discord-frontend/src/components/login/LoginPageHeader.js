import React from "react";
import { Typography } from "@mui/material";

const LoginPageHeader = () => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{ color: "#fff", fontWeight: 600, fontSize: "3.2rem" }}
      >
        Welcome back!
      </Typography>
      <Typography sx={{ color: "#b9bbbe", fontSize: "1.6rem" }}>
        We're so excited to see you again!
      </Typography>
    </>
  );
};

export default LoginPageHeader;
