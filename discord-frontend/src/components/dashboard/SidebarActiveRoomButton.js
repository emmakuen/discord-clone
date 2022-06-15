import React from "react";
import { Tooltip } from "@mui/material";
import { Avatar, RoundedIconButton } from "../";
import { colors } from "../../constants";

const SidebarActiveRoomButton = ({
  creatorUsername,
  participants,
  isUserInRoom,
  roomId,
}) => {
  const joinActiveRoom = () => {
    // join the room
  };

  const isButtonDisabled = participants.length > 3;
  const roomTitle = `Creator: ${creatorUsername}. Connected: ${participants.length}`;

  return (
    <Tooltip title={roomTitle}>
      <div>
        <RoundedIconButton
          disabled={isButtonDisabled || isUserInRoom}
          onClick={joinActiveRoom}
          additionalStyles={{
            padding: "0.2rem",
          }}
          additionalHoverStyles={{
            backgroundColor: colors.primary,
          }}
        >
          <Avatar username={creatorUsername} />
        </RoundedIconButton>
      </div>
    </Tooltip>
  );
};

export default SidebarActiveRoomButton;
