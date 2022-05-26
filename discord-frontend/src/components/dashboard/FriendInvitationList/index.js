import React from "react";
import { styled } from "@mui/system";
import FriendInvitationListItem from "./FriendInvitationListItem";

const DUMMY_INVITATIONS = [
  {
    id: 1,
    senderInfo: {
      username: "Laura",
      email: "dummy@laura.com",
    },
  },
  {
    id: 2,
    senderInfo: {
      username: "Jessy",
      email: "dummy@jess.com",
    },
  },
];

const MainContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  padding: "0 0.8rem",
});

const FriendInvitationList = () => {
  return (
    <MainContainer>
      {DUMMY_INVITATIONS.map((invitation) => (
        <FriendInvitationListItem
          key={invitation.id}
          id={invitation.id}
          username={invitation.senderInfo.username}
          email={invitation.senderInfo.email}
        />
      ))}
    </MainContainer>
  );
};

export default FriendInvitationList;
