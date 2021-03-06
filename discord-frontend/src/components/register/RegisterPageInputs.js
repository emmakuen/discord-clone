import React from "react";
import { InputWithLabel } from "../index";
import { Box } from "@mui/system";

const RegisterPageInputs = (props) => {
  const { email, setEmail, username, setUsername, password, setPassword } =
    props;

  const registerInputs = [
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
      id: "username",
      name: "username",
      label: "Username",
      type: "text",
      value: username,
      setValue: setUsername,
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
      {registerInputs.map((input) => (
        <InputWithLabel key={input.id} {...input} />
      ))}
    </Box>
  );
};

export default RegisterPageInputs;
