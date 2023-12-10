import React, { useEffect, useState } from "react";
import ChatItem from "./ChatItem.jsx/ChatItem";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { firestoreDB } from "../../../services/firebase/firebase";
import alasql from "alasql";
import { useAuth } from "../../../services/context/auth-context";
import ChatChannelItem from "./ChatChannelItem/ChatChannelItem";
import { Link } from "react-router-dom";

const MessageList = () => {
  const [allUser, setAllUser] = useState([]);
  const [querySearch, setQuerySearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [allChannel, setAllChannel] = useState([]);
  const { user } = useAuth();

  const getAllUser = async () => {
    const q = query(collection(firestoreDB, "users"));
    onSnapshot(q, (querySnapshot) => {
      const list = querySnapshot.docs.map((doc) => doc.data());
      const filterList = list.filter((item) => item.email !== user.email);

      setAllUser(filterList);
    });
  };

  const getAllChannel = async () => {
    const q = query(
      collection(firestoreDB, "channels"),
      where("userInArr", "array-contains", user.email),
      orderBy("updatedAt", "desc")
    );
    onSnapshot(q, (querySnapshot) => {
      const list = querySnapshot.docs.map((doc) => doc.data());
      setAllChannel(list);
    });
  };

  const searchUser = (query) => {
    const res = alasql(`SELECT * FROM ? WHERE displayName LIKE "%${query}%"`, [
      allUser,
    ]);
    setSearchResults(res);
  };

  useEffect(() => {
    if (querySearch && querySearch.trim() != "") searchUser(querySearch);
    else setSearchResults([]);
  }, [querySearch]);

  useEffect(() => {
    Promise.all([getAllChannel(), getAllUser()]);
  }, []);
  return (
    <div className="col-md-4 col-12 card-stacked">
      <div className="card shadow-line mb-3 chat">
        <div className="p-3 chat-header">
          <div className="d-flex">
            <div className="w-100 d-flex pl-0 mt-1">
              SuperMessenger.
              {/* <img className="user-detail-trigger rounded-circle shadow avatar-sm mr-3 chat-profile-picture" src="https://user-images.githubusercontent.com/35243461/168796906-ab4fc0f3-551c-4036-b455-be2dfedb9680.svg" /> */}
            </div>
            <div className="flex-shrink-0 margin-auto">
              <Link
                to="/chat"
                className="btn btn-sm btn-icon btn-light active text-dark ml-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinejoin="round"
                  className="feather"
                >
                  <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                  <polyline points="17 2 12 7 7 2"></polyline>
                </svg>
              </Link>
              <Link
                href="/profil"
                className="btn btn-sm btn-icon btn-light active text-dark ml-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinejoin="round"
                  className="feather"
                >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="chat-search pl-3 pr-3">
          <div className="input-group">
            <input
              type="text"
              onChange={(e) => setQuerySearch(e.target.value)}
              className="form-control"
              placeholder="Recherche de discussion"
            />
            <div className="input-group-append prepend-white">
              <span className="input-group-text pl-2 pr-2">
                <i className="fs-17 las la-search drop-shadow"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="chat-user-panel">
          <div className="pb-3 d-flex flex-column navigation-mobile pagination-scrool chat-user-scroll">
            {searchResults &&
              searchResults.length != 0 &&
              searchResults.map((user) => (
                <ChatItem key={user.uid} data={user} />
              ))}
            {searchResults.length == 0 &&
              allChannel &&
              allChannel.map((channel, idx) => (
                <ChatChannelItem key={idx} channel={channel} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MessageList;
