import React from "react";

const MessageInput = () => {
  return (
    <div className="chat-search pl-3 pr-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Écrire un message"
        />
        <div className="input-group-append prepend-white">
          <span className="input-group-text pl-2 pr-2">
            <i className="chat-upload-trigger fs-19 bi bi-file-earmark-plus ml-2 mr-2"></i>
            {/* <i className="fs-19 bi bi-emoji-smile ml-2 mr-2"></i>
            <i className="fs-19 bi bi-camera ml-2 mr-2"></i> */}
            <i className="fs-19 bi bi-cursor ml-2 mr-2"></i>
          </span>
        </div>
      </div>
    </div>
  );
};
export default MessageInput;
