import React from "react";
import { useNavigate } from "react-router-dom";
import { RedirectInfo, PrimaryButton } from "../index";
import { Tooltip } from "@mui/material";

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();
  const redirectToRegisterPage = () => {
    navigate("/register");
  };

  const getFormNotValidMessage = () => {
    return "Insert a valid email address and a password that contains 6 - 20 characters.";
  };

  const getFormValidMessage = () => {
    return "Press to login.";
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

  const tooltipProps = {
    title: (
      <p style={{ fontSize: "1.2rem" }}>
        {!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      </p>
    ),
  };
  return (
    <>
      <Tooltip {...tooltipProps}>
        <div>
          <PrimaryButton {...buttonProps} />
        </div>
      </Tooltip>
      <RedirectInfo {...redirectProps} />
    </>
  );
};

export default LoginPageFooter;
