import React from "react";
import { styled } from "@mui/system";
import { colors } from "../../../constants";
import FriendAddButton from "./FriendAddButton";
import FriendsTitle from "./FriendsTitle";
import FriendInvitationList from "../FriendInvitationList";
import FriendsList from "../FriendsList";

const MainContainer = styled("div")({
  width: "22.4rem",
  gridRow: "span 2",
  display: "flex",
  gap: "1rem",
  flexDirection: "column",
  alignItems: "center",
  padding: "0.8rem",
  backgroundColor: colors.darkGray2,
});
const FriendsSidebar = () => {
  return (
    <MainContainer>
      <FriendAddButton />
      <FriendsTitle title="Direct Messages" />
      <FriendsList />
      <FriendsTitle title="Invitations" />
      <FriendInvitationList />
    </MainContainer>
  );
};

export default FriendsSidebar;
