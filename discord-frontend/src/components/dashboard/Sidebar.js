import React from "react";
import { styled } from "@mui/system";
import { colors } from "../../constants";
import { HalfRoundedIconButton, RoundedIconButton } from "../index";
import { Groups, Add } from "@mui/icons-material";

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

const Sidebar = () => {
  const createNewRoomHandler = () => {
    // TODO: create a room and send this info to the server
  };

  return (
    <MainContainer>
      <HalfRoundedIconButton>
        <Groups style={{ fontSize: "2.4rem" }} />
      </HalfRoundedIconButton>
      <Separator />
      <RoundedIconButton onClick={createNewRoomHandler}>
        <Add
          style={{
            fontSize: "2.4rem",
            color: "inherit",
          }}
        />
      </RoundedIconButton>
    </MainContainer>
  );
};

export default Sidebar;
