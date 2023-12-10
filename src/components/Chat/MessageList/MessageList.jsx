import React from "react";
import ChatItem from "./ChatItem.jsx/ChatItem";

const MessageList = () => {
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
                      <a href="#" className="btn btn-sm btn-icon btn-light active text-dark ml-2">
                        <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" className="feather">
                          <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                          <polyline points="17 2 12 7 7 2"></polyline>
                        </svg>
                      </a>
                      {/* <a href="#" className="btn btn-sm btn-icon btn-light active text-dark ml-2">
                        <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" className="feather">
                          <path d="M12 20h9"></path>
                          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                        </svg>
                      </a> */}
                      <a href="#" className="btn btn-sm btn-icon btn-light active text-dark ml-2">
                        <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" className="feather">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="12" cy="5" r="1"></circle>
                          <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="chat-search pl-3 pr-3">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Recherche de discussion" />
                    <div className="input-group-append prepend-white">
                      <span className="input-group-text pl-2 pr-2">
                        <i className="fs-17 las la-search drop-shadow"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="chat-user-panel">
                  <div className="pb-3 d-flex flex-column navigation-mobile pagination-scrool chat-user-scroll">
                    <ChatItem />
                  </div>
                </div>
              </div>
            </div>
    )
}
export default MessageList