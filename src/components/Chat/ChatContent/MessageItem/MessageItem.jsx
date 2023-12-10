import React from "react";

const MessageItem = ({ isMe }) => {
  return isMe ? (
    <div className="d-flex flex-row-reverse mb-2">
      <div className="right-chat-message fs-13 mb-2">
        <div className="d-flex flex-row">
          <div className="pr-2">
            I can understand that. I get nervous before interviews, too
          </div>
          <div className="pr-4"></div>
        </div>
        <div className="message-options dark">
          <div className="message-time">
            <div className="d-flex flex-row">
              <div className="mr-2">07:21</div>
              <div className="svg15 double-check"></div>
            </div>
          </div>
          <div className="message-arrow">
            <i className="text-muted la la-angle-down fs-17"></i>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="left-chat-message fs-13 mb-2">
      <p className="mb-0 mr-3 pr-4">
        Thanks. I’m just happy that it’s over. I was really nervous about it.
      </p>
      <div className="message-options">
        <div className="message-time">07:16</div>
        <div className="message-arrow">
          <i className="text-muted la la-angle-down fs-17"></i>
        </div>
      </div>
    </div>
  );
};
export default MessageItem;
