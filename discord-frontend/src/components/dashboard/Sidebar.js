import React from "react";
import { styled } from "@mui/system";
import { colors } from "../../constants";
import { Groups, Add } from "@mui/icons-material";
import { HalfRoundedIconButton, RoundedIconButton } from "../index";
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

const Sidebar = () => {
  const createNewRoomHandler = () => {
    roomHandler.createNewRoom();
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
