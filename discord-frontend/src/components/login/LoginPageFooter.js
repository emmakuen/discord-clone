import React from "react";
import PrimaryButton from "../shared/PrimaryButton";

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const buttonProps = {
    label: "Login",
    additionalStyles: {
      marginTop: "2.4rem",
    },
    disabled: !isFormValid,
    onClick: handleLogin,
  };
  return (
    <div>
      <PrimaryButton {...buttonProps} />
    </div>
  );
};

export default LoginPageFooter;
