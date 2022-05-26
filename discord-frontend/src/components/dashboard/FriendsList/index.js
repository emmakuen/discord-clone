import React from "react";
import { styled } from "@mui/system";
import FriendsListItem from "./FriendsListItem";

const DUMMY_FRIENDS = [
  {
    id: 1,
    username: "Jen",
    isOnline: true,
  },
  {
    id: 2,
    username: "Alek",
    isOnline: false,
  },
  {
    id: 3,
    username: "Ben",
    isOnline: false,
  },
];

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  // gap: "1rem",
});

const FriendsList = () => {
  return (
    <MainContainer>
      {DUMMY_FRIENDS.map((friend) => (
        <FriendsListItem key={friend.id} {...friend} />
      ))}
    </MainContainer>
  );
};

export default FriendsList;
