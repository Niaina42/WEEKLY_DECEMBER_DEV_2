import React, { useEffect } from "react";
import MessageList from "./MessageList/MessageList";
import ChatContent from "./ChatContent/ChatContent";
import { useParams } from "react-router-dom";
import GroupMenu from "../GroupMenu/GroupMenu";

const GroupChat = () => {
  const { userID, groupID } = useParams()
  const allowSend = groupID && userID
  
  return (
    <div className="main-wrapper">
      <div className="page-content">
        <div className="container-chating">
          <div className="row">
            <MessageList />
            {
              allowSend ? (
                <ChatContent userID={userID} groupID={groupID} />
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

export default GroupChat;
