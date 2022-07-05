import React from "react";
import { Tooltip } from "@mui/material";
import { Avatar, RoundedIconButton } from "../";
import * as roomHandler from "../../api/socketRoomHandler";
import { colors } from "../../constants";

const additionalStyle = { backgroundColor: colors.roomColor };

const SidebarActiveRoomButton = ({
  creatorUsername,
  participants,
  isUserInRoom,
  roomId,
}) => {
  const joinActiveRoom = () => {
    roomHandler.joinRoom(roomId);
  };

  const isButtonDisabled = participants.length > 3;
  const roomTitle = `Creator: ${creatorUsername}. Connected: ${participants.length}`;

  const tooltipProps = {
    title: <p style={{ fontSize: "1.3rem" }}>{roomTitle}</p>,
  };

  return (
    <Tooltip {...tooltipProps}>
      <div>
        <RoundedIconButton
          disabled={isButtonDisabled || isUserInRoom}
          onClick={joinActiveRoom}
          additionalStyles={{
            padding: "0.2rem",
            ...additionalStyle,
          }}
          additionalHoverStyles={additionalStyle}
        >
          <Avatar
            username={creatorUsername}
            additionalStyles={additionalStyle}
          />
        </RoundedIconButton>
      </div>
    </Tooltip>
  );
};

export default SidebarActiveRoomButton;
