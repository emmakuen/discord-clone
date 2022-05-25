import React from "react";
import {
  AuthBox,
  LoginPageHeader,
  LoginPageInputs,
  LoginPageFooter,
} from "../components";
import { validateLoginForm } from "../utils/validators";

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isFormValid, setIsFormValid] = React.useState(false);
  const handleLogin = () => {
    console.log(email, password);
  };
  React.useEffect(() => {
    setIsFormValid(validateLoginForm({ email, password }));
  }, [email, password]);
  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInputs
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
};

export default LoginPage;
