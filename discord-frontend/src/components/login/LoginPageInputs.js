import React from "react";
import { InputWithLabel } from "../index";
import { Box } from "@mui/system";

const LoginPageInputs = ({ email, setEmail, password, setPassword }) => {
  const loginInputs = [
    {
      id: "email",
      name: "email",
      label: "Email",
      type: "email",
      value: email,
      setValue: setEmail,
      placeholder: "",
    },
    {
      id: "password",
      name: "password",
      label: "Password",
      type: "password",
      value: password,
      setValue: setPassword,
      placeholder: "",
    },
  ];

  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: "2.4rem" }}
    >
      {loginInputs.map((input) => (
        <InputWithLabel key={input.id} {...input} />
      ))}
    </Box>
  );
};

export default LoginPageInputs;
