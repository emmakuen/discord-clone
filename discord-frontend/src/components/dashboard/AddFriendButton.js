import React from "react";
import { PrimaryButton } from "../index";
import { colors } from "../../constants";

const additionalStyles = {
  padding: "0.2rem 1rem",
  width: "100%",
  background: colors.secondary,
  fontWeight: 400,
};

const AddFriendButton = () => {
  const openAddFriendDialog = () => {};

  return (
    <>
      <PrimaryButton
        additionalStyles={additionalStyles}
        label="Add Friend"
        onClick={openAddFriendDialog}
      />
    </>
  );
};

export default AddFriendButton;
