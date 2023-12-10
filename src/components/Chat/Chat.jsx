import React, { useEffect } from "react";
import MessageList from "./MessageList/MessageList";
import ChatContent from "./ChatContent/ChatContent";
import { useParams } from "react-router-dom";
import GroupMenu from "./GroupMenu/GroupMenu";

const Chat = () => {
  const { userID, targetID } = useParams()
  const allowSend = targetID && userID
  return (
    <div className="main-wrapper">
      <div className="page-content">
        <div className="container-chating">
          <div className="row">
            <MessageList />
            {
              allowSend ? (
                <ChatContent userID={userID} targetID={targetID} />
              ) : (
                <GroupMenu />
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
