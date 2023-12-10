import React from "react";

const ChatItem = () => {
  return (
    <div className="chat-item d-flex pl-3 pr-0 pt-3 pb-3">
      <div className="w-100">
        <div className="d-flex pl-0">
          <img
            className="rounded-circle avatar-sm mr-3"
            src="https://user-images.githubusercontent.com/35243461/168796906-ab4fc0f3-551c-4036-b455-be2dfedb9680.svg"
          />
          <div>
            <p className="margin-auto fw-400 text-dark-75">Joel Lehtinen</p>
            <div className="d-flex flex-row mt-1">
              <span>
                <div className="svg15 double-check"></div>
              </span>
              <span className="message-shortcut margin-auto text-muted fs-13 ml-1 mr-4">
                find it hard to believe you don't know
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 margin-auto pl-2 pr-3">
        <div className="d-flex flex-column">
          <p className="text-muted text-right fs-13 mb-2">4.10.2021</p>
        </div>
      </div>
    </div>
  );
};
export default ChatItem;
