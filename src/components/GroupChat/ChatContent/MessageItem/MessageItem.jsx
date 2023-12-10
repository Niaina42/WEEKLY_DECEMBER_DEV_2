import { collection, deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { firestoreDB } from "../../../../services/firebase/firebase";
import { useAuth } from "../../../../services/context/auth-context";

const MessageItem = ({ isMe, message }) => {
  const { user } = useAuth();
  const timeSplit =
    message && message.sendAt.toDate().toLocaleTimeString().split(":");
  const time = timeSplit[0] + ":" + timeSplit[1];

  const deleteMessage = async () => {
    const docRef = doc(firestoreDB, "messages", message.id);
    await deleteDoc(docRef)
      .then(() => {
        console.log("Document supprimé avec succès !");
      })
      .catch((err) => console.log(err));
  };

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
            {message && message.userSender == user.email && (
              <div className="message-arrow" onClick={deleteMessage}>
                <i className="bi bi-trash"></i>
              </div>
            )}
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
            <div className="message-arrow" onClick={deleteMessage}>
              <i className="bi bi-trash"></i>
            </div>
        </div>
      </div>
    </div>
  );
};
export default MessageItem;
