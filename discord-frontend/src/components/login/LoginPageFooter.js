import React from "react";
import PrimaryButton from "../shared/PrimaryButton";
import RedirectInfo from "../shared/RedirectInfo";
import { useNavigate } from "react-router-dom";

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();
  const redirectToRegisterPage = () => {
    navigate("/register");
  };

  const buttonProps = {
    label: "Login",
    additionalStyles: {
      marginTop: "2.4rem",
    },
    disabled: !isFormValid,
    onClick: handleLogin,
  };

  const redirectProps = {
    text: "Need an account?",
    redirectText: "Register",
    additionalStyles: {
      marginTop: "-1rem",
    },
    redirectHandler: redirectToRegisterPage,
  };
  return (
    <>
      <div>
        <PrimaryButton {...buttonProps} />
      </div>
      <RedirectInfo {...redirectProps} />
    </>
  );
};

export default LoginPageFooter;
