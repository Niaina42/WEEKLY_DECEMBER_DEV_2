import React, { useEffect, useRef, useState } from "react";
import MessageItem from "./MessageItem/MessageItem";
import MessageInput from "./MessageInput/MessageInput";
import { collection, onSnapshot, orderBy, query, where} from "firebase/firestore";
import { createData, firestoreDB } from "../../../services/firebase/firebase";
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from "../../../services/context/auth-context";

const ChatContent = ({ userID, targetID }) => {
    const lastMessageRef = useRef()
    const { user } = useAuth()
    const [targetUser, setTargetUser] = useState(null)
    const [activeChannel, setActiveChannel] = useState(null)

    const getTargetUser = () => {
      setTargetUser(null)
      const q = query(collection(firestoreDB, "users"), where("uid", "==", targetID));
      onSnapshot(q, (querySnapshot) => {
        const list = querySnapshot.docs.map((doc) => doc.data());
        setTargetUser(list[0]);
        checkChannel(list[0])
      });
    }

    const createChannel = async (target) => {
      try {
        let id = uuidv4()
        await createData("channels", id, {
          id,
          createdAt: new Date(),
          userIn: [
            user.email,
            target.email
          ]
        })
      } catch (error) {
        console.log(error)
      }
    }

    const checkChannel = (target) => {
      const q = query(collection(firestoreDB, "channels"), where("userIn", "array-contains", target.email));
      onSnapshot(q, (querySnapshot) => {
        const res = querySnapshot.docs.map((doc) => doc.data());
        if(res[0]) {
          setActiveChannel(res[0])
        }
        else 
          createChannel(target)
      });
    }

    const scrollMessage = () => {
      targetUser && lastMessageRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    useEffect(() => {
      Promise.all([
        scrollMessage(),
        getTargetUser()
      ])
    }, [targetID])

    return (
      targetUser ? (
        <div className="col-md-8 col-12 card-stacked message-stacked">
              <div className="card shadow-line chat chat-panel">
                <div className="p-3 chat-header">
                  <div className="d-flex">
                    <div className="w-100 d-flex pl-0">
                      <img className="rounded-circle avatar-sm mr-3 chat-profile-picture" src="https://user-images.githubusercontent.com/35243461/168796906-ab4fc0f3-551c-4036-b455-be2dfedb9680.svg" />
                      <div className="mr-3">
                        <a href="!#">
                          <p className="fw-400 mb-0 text-dark-75">{targetUser && targetUser.displayName}</p>
                        </a>
                        <p className="sub-caption text-muted text-small mb-0"><i className="la la-clock mr-1"></i>last seen today at 09:15 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row mb-3 navigation-mobile scrollable-chat-panel chat-panel-scroll">
                  <div className="w-100 p-3 chat-content">
                    {/* <div className="svg36 loader-animate3 horizontal-margin-auto mb-2"></div> */}
                    <MessageItem />
                    <MessageItem isMe={true} />
                    <MessageItem />
                    <MessageItem isMe={true}/>
                    <MessageItem isMe={true}/>
                    <span ref={lastMessageRef}></span>
                  </div>
                </div>

                <MessageInput />

              </div>
            </div>
      ):(
        <div className="svg36 loader-animate3 horizontal-margin-auto mt-5"></div>
      )
    )
}
export default ChatContent