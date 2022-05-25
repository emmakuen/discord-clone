import React from "react";
import { styled } from "@mui/system";
import { Sidebar, FriendsSidebar, Messenger, Appbar } from "../components";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "auto auto 1fr",
  gridTemplateRows: "auto 1fr",
});

const Dashboard = () => {
  return (
    <Wrapper>
      <Sidebar />
      <FriendsSidebar />
      <Appbar />
      <Messenger />
    </Wrapper>
  );
};

export default Dashboard;
