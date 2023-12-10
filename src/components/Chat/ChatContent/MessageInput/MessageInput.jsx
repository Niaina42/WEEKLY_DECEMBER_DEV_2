import React, { useState } from "react";
import { useAuth } from "../../../../services/context/auth-context";
import { createData, updateData } from "../../../../services/firebase/firebase";
import { v4 as uuidv4 } from "uuid";

const MessageInput = ({ scrollMessage, activeChannel }) => {
  const { user } = useAuth();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const sendMessage = async () => {
    if (message.trim() != "") {
      try {
        setLoading(true);
        let id = uuidv4();
        await createData("messages", id, {
          id,
          messageContent: message,
          userSender: user.email,
          userSenderName: user.displayName,
          channel: activeChannel.id,
          sendAt: new Date()
        }).then(async () => {
          await updateData("channels", activeChannel.id, {
            updatedAt: new Date(),
            lastMessage: message,
            seenBy: [user.email],
          });
          setMessage("")
          setLoading(false);
          scrollMessage()
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="chat-search pl-3 pr-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Écrire un message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="input-group-append prepend-white">
          <span className="input-group-text pl-2 pr-2">
            <i className="chat-upload-trigger fs-19 bi bi-file-earmark-plus ml-2 mr-2"></i>
            {/* <i className="fs-19 bi bi-emoji-smile ml-2 mr-2"></i>
            <i className="fs-19 bi bi-camera ml-2 mr-2"></i> */}
            {loading ? (
              "......"
            ) : (
              <i onClick={sendMessage} className="fs-19 bi bi-cursor ml-2 mr-2"></i>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};
export default MessageInput;
