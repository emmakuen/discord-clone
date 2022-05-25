import React from "react";
import { useNavigate } from "react-router-dom";
import { RedirectInfo, PrimaryButton } from "../index";
import { Tooltip } from "@mui/material";

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  const navigate = useNavigate();
  const redirectToLoginPage = () => navigate("/login");
  const getFormNotValidMessage = () => {
    return "Insert a valid email address and a username with 3 - 12 characters and a password with 6 - 20 characters.";
  };

  const getFormValidMessage = () => {
    return "Press to register.";
  };
  const buttonProps = {
    label: "Register",
    additionalStyles: {
      marginTop: "2.4rem",
    },
    disabled: !isFormValid,
    onClick: handleRegister,
  };

  const redirectProps = {
    text: "",
    redirectText: "Already have an account?",
    additionalStyles: {
      marginTop: "-1rem",
    },
    redirectHandler: redirectToLoginPage,
  };

  const tooltipProps = {
    title: (
      <p style={{ fontSize: "1.3rem" }}>
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

export default RegisterPageFooter;
