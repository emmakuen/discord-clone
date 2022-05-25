import React from "react";
import { InputWithLabel } from "../index";

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
    <>
      {registerInputs.map((input) => (
        <InputWithLabel key={input.id} {...input} />
      ))}
    </>
  );
};

export default RegisterPageInputs;
