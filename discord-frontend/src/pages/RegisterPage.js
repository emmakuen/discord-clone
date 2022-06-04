import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getActions } from "../store/actions/authActions";
import {
  AuthBox,
  BoxHeader,
  RegisterPageInputs,
  RegisterPageFooter,
} from "../components";
import { validateRegisterForm } from "../utils/validators";

const RegisterPage = ({ register }) => {
  const navigate = useNavigate();
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

  const handleRegister = (e) => {
    e.preventDefault();
    const userDetails = {
      email,
      username,
      password,
    };
    register(userDetails, navigate);
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

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(RegisterPage);
