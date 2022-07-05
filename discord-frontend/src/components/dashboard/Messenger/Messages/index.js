import React from "react";
import { styled } from "@mui/system";
import { connect } from "react-redux";
import MessagesHeader from "./MessagesHeader";
import Message from "./Message";
import MessageDateSeparator from "./MessageDateSeparator";
// import DUMMY_MESSAGES from "./dummy_messages";

const MainContainer = styled("div")({
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  height: "84vh",
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
  const messagesEndRef = React.useRef();
  React.useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  });
  return (
    <MainContainer>
      <MessagesHeader username={chosenChatDetails?.username} />
      {messages.map((message, index) => {
        const sameAuthor =
          index > 0 && message.author._id === messages[index - 1].author._id;
        const sameDay =
          index > 0 &&
          formatDate(message.date) === formatDate(messages[index - 1].date);
        return (
          <div key={message._id}>
            {(!sameDay || index === 0) && (
              <MessageDateSeparator date={formatDate(message.date)} />
            )}
            <Message
              {...message}
              username={message.author.username}
              sameAuthor={sameAuthor}
              sameDay={sameDay}
              date={formatDate(message.date)}
            />
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};
export default connect(mapStoreStateToProps)(Messages);
