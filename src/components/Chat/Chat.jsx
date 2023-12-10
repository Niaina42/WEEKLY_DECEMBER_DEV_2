import React, { useEffect } from "react";
import MessageList from "./MessageList/MessageList";
import ChatContent from "./ChatContent/ChatContent";

const Chat = () => {
  return (
    <div className="main-wrapper">
      <div className="page-content">
        <div className="container-chating">
          <div className="row">
            <MessageList />
            <ChatContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
