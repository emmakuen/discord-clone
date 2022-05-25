import React from "react";
import {
  AuthBox,
  BoxHeader,
  RegisterPageInputs,
  RegisterPageFooter,
} from "../components";
import { validateRegisterForm } from "../utils/validators";

const RegisterPage = () => {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isFormValid, setIsFormValid] = React.useState(false);
  const pageInputsProps = {
    email,
    setEmail,
    username,
    setUsername,
    password,
    setPassword,
  };

  React.useEffect(() => {
    setIsFormValid(validateRegisterForm({ email, username, password }));
  }, [email, password, username]);

  const handleRegister = () => {
    console.log(email, username, password);
  };

  const footerProps = {
    isFormValid,
    handleRegister,
  };
  return (
    <AuthBox>
      <BoxHeader title="Create an account" />
      <RegisterPageInputs {...pageInputsProps} />
      <RegisterPageFooter {...footerProps} />
    </AuthBox>
  );
};

export default RegisterPage;
