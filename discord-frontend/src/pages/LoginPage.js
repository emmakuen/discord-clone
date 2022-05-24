import React from "react";
import { AuthBox, LoginPageHeader, LoginPageInputs } from "../components";

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInputs
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
    </AuthBox>
  );
};

export default LoginPage;
