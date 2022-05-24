import React from "react";
import { InputWithLabel } from "../index";

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
    <>
      {loginInputs.map((input) => (
        <InputWithLabel key={input.id} {...input} />
      ))}
    </>
  );
};

export default LoginPageInputs;
