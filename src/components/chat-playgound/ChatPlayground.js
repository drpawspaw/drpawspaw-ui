import Message from "../message/Message";
import { useEffect, useRef, useState } from "react";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input } from "@nextui-org/react";
import { conversations } from "../../mock-data/MockData";
import { BOT, USER } from "../../constants";
import "./ChatPlayground.scss";

const ChatPlayground = () => {
  const [messageHistory, setMessageHistory] = useState([]);
  const [question, setQuestion] = useState("");
  const bottomRef = useRef(null);

  const handleTextOnChange = (e) => {
    setQuestion(e?.target?.value ?? "");
  };

  const handleTextKeyDown = (e) => {
    if (e.key === "Enter") {
      handleOnClick(e);
      handleResetText();
    }
  };

  const handleOnClick = (e) => {
    setMessageHistory([
      ...messageHistory,
      {
        timestamp: "",
        content: question ?? "",
        sender: USER,
      },
    ]);
    handleResetText();
  };

  const handleResetText = () => {
    setQuestion("");
  };

  useEffect(() => {
    // TODO : Fetch the details from the local storage or session storage later
    setMessageHistory([...conversations]);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageHistory]);

  return (
    <div className="chat-playground d-flex h-100 flex-column align-items-center justify-content-center">
      <div className="chat-playground-messages">
        {messageHistory?.map((con, idx) => (
          <Message key={idx} content={con?.content ?? ""} sender={con?.sender ?? BOT} />
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="chat-playground-input d-flex align-items-center justify-content-center">
        <Input
          value={question}
          placeholder="Welcome to Drpawspaw! How your pet doing ?"
          className="chat-playground-input-text"
          onChange={(e) => handleTextOnChange(e)}
          onKeyDown={(e) => handleTextKeyDown(e)}
        />
        <Button onClick={(e) => handleOnClick(e)}>
          <FontAwesomeIcon
            icon={faPaperPlane}
            className="chat-playground-input-send"
          />
        </Button>
      </div>
    </div>
  );
};

export default ChatPlayground;
