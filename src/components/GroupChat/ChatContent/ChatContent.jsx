import React, { useEffect, useRef, useState } from "react";
import MessageItem from "./MessageItem/MessageItem";
import MessageInput from "./MessageInput/MessageInput";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  or,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { createData, firestoreDB } from "../../../services/firebase/firebase";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "../../../services/context/auth-context";

const ChatContent = ({ userID, groupID }) => {
  const lastMessageRef = useRef();
  const { user } = useAuth();
  const [targetGroup, setTargetGroup] = useState(null);
  const [activeGroup, setActiveGroup] = useState(null);
  const [allMessage, setAllMessage] = useState([]);

  const getTargetGroup = async () => {
    setActiveGroup(null);
    setAllMessage([]);
    const docRef = doc(firestoreDB, "groups", groupID);
    const docSnap = await getDoc(docRef);
    if (docSnap) {
      let targetGroup = docSnap.data();
      setTargetGroup(targetGroup);
      setActiveGroup(targetGroup);
      getAllMessage(targetGroup.id);
    }
  };

  const getAllMessage = (grouID) => {
    const q = query(
      collection(firestoreDB, "messages"),
      where("group", "==", grouID),
      orderBy("sendAt", "asc")
    );
    onSnapshot(q, (querySnapshot) => {
      const list = querySnapshot.docs.map((doc) => doc.data());
      setAllMessage(list);
    });
  };

  const scrollMessage = () => {
    targetGroup && lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    getTargetGroup()
    scrollMessage()
  }, [groupID]);

  return activeGroup ? (
    <div className="col-md-8 col-12 card-stacked message-stacked">
      <div className="card shadow-line chat chat-panel">
        <div className="p-3 chat-header">
          <div className="d-flex">
            <div className="w-100 d-flex pl-0 mt-2 mb-3">
              <div className="mr-3">
                <a href="!#">
                  <p className="fw-400 mb-0 text-dark-75">
                    {"Groupe: "+" "}{targetGroup && targetGroup.groupName}{" "}
                  </p>
                </a>
                <p className="sub-caption text-muted text-small mb-0">
                  {targetGroup && targetGroup.email}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row mb-3 navigation-mobile scrollable-chat-panel chat-panel-scroll">
          <div className="w-100 p-3 chat-content">
            {/* <div className="svg36 loader-animate3 horizontal-margin-auto mb-2"></div> */}
            {allMessage &&
              allMessage.map((message, id) => (
                <MessageItem
                  key={id}
                  isMe={message.userSender == user.email}
                  message={message}
                />
              ))}
            <span ref={lastMessageRef}></span>
          </div>
        </div>

        <MessageInput
          activeGroup={activeGroup}
          scrollMessage={scrollMessage}
        />
      </div>
    </div>
  ) : (
    <div className="svg36 loader-animate3 horizontal-margin-auto mt-5"></div>
  );
};
export default ChatContent;
