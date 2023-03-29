import Message from "../message/Message";
import { useEffect, useRef, useState } from "react";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input } from "@nextui-org/react";
import { BOT, MESSAGE_LOADING, NOTIFY_STATE, USER } from "../../constants";
import "./ChatPlayground.scss";
import { postChat } from "../../utils/ApiUtils";
import { notificationManager } from "../../utils/NotificationUtils"

const ChatPlayground = ({ userImage }) => {
  const ERROR_MESSAGE = "Sorry for inconvience! Please try again later.";
  const [messageHistory, setMessageHistory] = useState([]);
  const [question, setQuestion] = useState("");
  const [isBotTurn, setIsBotTurn] = useState(false);
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
    if (question !== "" && question) {
      setMessageHistory([
        ...messageHistory,
        {
          timestamp: "",
          content: question ?? "",
          sender: USER,
        },
        {
          timestamp: "",
          content: MESSAGE_LOADING,
          sender: BOT,
        },
      ]);
      setIsBotTurn(true);
      handleResetText();
    }
  };

  const handleResetText = () => {
    setQuestion("");
  };

  const handleBotReply = (userMessage) => {
    const messageHistoryCopy = [...messageHistory];
    postChat(userMessage)
      .then((res) => {
        messageHistoryCopy[messageHistoryCopy.length - 1].content =
          res?.data?.response ?? ERROR_MESSAGE;
        if (res?.data?.suggestions.length !== 0) {
          const suggestionMessage = {
            timestamp: "",
            content: "Here are the symptoms: " + res?.data?.suggestions.join(", "),
            sender: BOT,
          };
          messageHistoryCopy.push(suggestionMessage)
        }
        if (res?.data?.treatments !== "") {
          const treatments = {
            timestamp: "",
            content: res?.data?.treatments,
            sender: BOT,
          };
          messageHistoryCopy.push(treatments)
        }
        setMessageHistory([...messageHistoryCopy]);
        setIsBotTurn(false);
      })
      .catch((err) => {
        console.error(err);
        notificationManager("Unable to perform request", NOTIFY_STATE.error)
        messageHistoryCopy[messageHistoryCopy.length - 1].content =
          ERROR_MESSAGE;
        setMessageHistory([...messageHistoryCopy]);
        setIsBotTurn(false);
      });
  };

  useEffect(() => {
    if (messageHistory.length !== 0 && isBotTurn) {
      handleBotReply(messageHistory[messageHistory.length - 2].content);
    }
  }, [messageHistory]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageHistory]);

  return (
    <div className="chat-playground d-flex h-100 flex-column align-items-center justify-content-center">
      <div className="chat-playground-messages">
        {messageHistory?.map((con, idx) => (
          <Message
            key={idx}
            content={con?.content ?? ""}
            sender={con?.sender ?? BOT}
            userImage={userImage}
          />
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
