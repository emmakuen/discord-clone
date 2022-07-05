import React from "react";
import { styled } from "@mui/system";
import { colors } from "../../constants";
import { Groups, Add } from "@mui/icons-material";
import { connect } from "react-redux";
import { HalfRoundedIconButton, RoundedIconButton } from "../index";
import SidebarActiveRoomButton from "./SidebarActiveRoomButton";
import * as roomHandler from "../../api/socketRoomHandler";

const MainContainer = styled("div")({
  padding: "1.2rem",
  gridRow: "span 2",
  display: "flex",
  gap: "0.8rem",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: colors.blackGray,
});

const Separator = styled("div")({
  width: "3.2rem",
  height: "2px",
  backgroundColor: colors.darkGray,
  borderRadius: "1px",
});

const renderRoomButtons = (activeRooms, isUserInRoom) => {
  return activeRooms.map((room, idx) => (
    <SidebarActiveRoomButton
      key={room.roomId}
      {...room}
      isUserInRoom={isUserInRoom}
    />
  ));
};

const Sidebar = ({ activeRooms, isUserInRoom }) => {
  const createNewRoomHandler = () => {
    roomHandler.createNewRoom();
  };

  return (
    <MainContainer>
      <HalfRoundedIconButton>
        <Groups style={{ fontSize: "2.4rem" }} />
      </HalfRoundedIconButton>
      <Separator />
      <RoundedIconButton onClick={createNewRoomHandler} disabled={isUserInRoom}>
        <Add
          style={{
            fontSize: "2.4rem",
            color: "inherit",
          }}
        />
      </RoundedIconButton>
      <Separator />
      {renderRoomButtons(activeRooms, isUserInRoom)}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

export default connect(mapStoreStateToProps)(Sidebar);
