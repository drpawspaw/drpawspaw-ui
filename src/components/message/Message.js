import { Avatar, Text } from "@nextui-org/react";
import { BOT } from "../../constants";
import "./Message.scss";

const Message = ({ content, sender }) => {
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
        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
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
        {content}
      </Text>
    </div>
  );
};

export default Message;
