import React from "react";

const MessageItem = ({ isMe, message }) => {
  const timeSplit =
    message && message.sendAt.toDate().toLocaleTimeString().split(":");
  const time = timeSplit[0] + ":" + timeSplit[1];
  return isMe ? (
    <div style={{ textAlign: "end" }}>
      <span className="message-sent-by" style={{ paddingRight: "10px" }}>
        {message.userSenderName}
      </span>

      <div className="d-flex flex-row-reverse mb-2">
        <div className="right-chat-message fs-13 mb-2">
          <div className="d-flex flex-row">
            <div className="pr-2">{message && message.messageContent}</div>
            <div className="pr-4"></div>
          </div>
          <div className="message-options dark">
            <div className="message-time">
              <div className="d-flex flex-row">
                <div className="mr-2">{time}</div>
                {/* <div className="svg15 double-check"></div> */}
              </div>
            </div>
            <div className="message-arrow">
              <i className="text-muted la la-angle-down fs-17"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <span className="message-sent-by" style={{ paddingLeft: "10px" }}>
        {message.userSenderName}
      </span>
      <div className="left-chat-message fs-13 mb-2">
        <p className="mb-0 mr-3 pr-4">{message && message.messageContent}</p>
        <div className="message-options">
          <div className="message-time">{time}</div>
          <div className="message-arrow">
            <i className="text-muted la la-angle-down fs-17"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MessageItem;
