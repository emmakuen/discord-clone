import React from "react";
import { styled } from "@mui/system";
import { connect } from "react-redux";
import MessagesHeader from "./MessagesHeader";
import Message from "./Message";
// import DUMMY_MESSAGES from "./dummy_messages";

const MainContainer = styled("div")({
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
});

const formatDate = (date, format = "dd/mm/yy") => {
  const unformattedDate = new Date(date);
  const map = {
    mm: unformattedDate.getMonth() + 1,
    dd: unformattedDate.getDate(),
    yy: unformattedDate.getFullYear().toString().slice(-2),
    yyyy: unformattedDate.getFullYear(),
  };

  return format.replace(/mm|dd|yy|yyy/gi, (key) => map[key]);
};

const Messages = ({ chosenChatDetails, messages }) => {
  return (
    <MainContainer>
      <MessagesHeader username={chosenChatDetails?.username} />
      {messages.map((message, index) => {
        console.log(message.author);
        const sameAuthor =
          index > 0 && message.author._id === messages[index - 1].author._id;
        const sameDay =
          index > 0 &&
          formatDate(message.date) === formatDate(messages[index - 1].date);
        console.log(sameAuthor && sameDay);
        return (
          <Message
            key={message.id}
            {...message}
            username={message.author.username}
            sameAuthor={sameAuthor}
            sameDay={sameDay}
            date={formatDate(message.date)}
          />
        );
      })}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};
export default connect(mapStoreStateToProps)(Messages);
