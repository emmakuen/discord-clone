import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getActions } from "../store/actions/authActions";
import {
  AuthBox,
  LoginPageHeader,
  LoginPageInputs,
  LoginPageFooter,
} from "../components";
import { validateLoginForm } from "../utils/validators";

const LoginPage = ({ login }) => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isFormValid, setIsFormValid] = React.useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const userDetails = { email, password };
    login(userDetails, navigate);
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

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(LoginPage);
