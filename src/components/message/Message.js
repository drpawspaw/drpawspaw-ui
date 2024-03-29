import { Avatar, Loading, Text } from "@nextui-org/react";
import { APPLICATION_LOGO, BOT, MESSAGE_LOADING } from "../../constants";
import "./Message.scss";

const Message = ({ content, sender, userImage }) => {
  const isBot = sender === BOT;

  return (
    <div
      className={
        isBot
          ? "chat-message d-flex flex-row align-items-center w-100"
          : "chat-message d-flex flex-row-reverse align-items-center w-100"
      }
    >
      <Avatar
        size="md"
        src={
          isBot
            ? APPLICATION_LOGO
            : userImage !== ""
            ? userImage
            : "https://design.freepikcompany.com/media/img/avatars/avatar-06.svg"
        }
        color={isBot ? "primary" : "success"}
        bordered
      />
      <Text
        className={
          isBot
            ? "chat-message-content h-100 d-flex align-items-center mb-0 ms-2"
            : "chat-message-content h-100 d-flex align-items-center mb-0 me-2"
        }
      >
        {content === MESSAGE_LOADING ? (
          <Loading
            className="chat-message-content-loading"
            type="points-opacity"
          />
        ) : (
          content
        )}
      </Text>
    </div>
  );
};

export default Message;
