import React from "react";
import { PrimaryButton } from "../../index";
import { colors } from "../../../constants";
import FriendAddDialog from "./FriendAddDialog";

const additionalStyles = {
  padding: "0.2rem 1rem",
  width: "100%",
  background: colors.secondary,
  fontWeight: 400,
};

const FriendAddButton = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <PrimaryButton
        additionalStyles={additionalStyles}
        label="Add Friend"
        onClick={handleOpenDialog}
      />
      <FriendAddDialog
        isDialogOpen={isDialogOpen}
        closeDialog={handleCloseDialog}
      />
    </>
  );
};

export default FriendAddButton;
