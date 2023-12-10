import React, { useEffect, useRef } from "react";

const ChatContent = () => {
    const lastMessageRef = useRef()
    const scrollMessage = () => {
        lastMessageRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    useEffect(() => {
        scrollMessage()
    }, [])

    return (
        <div className="col-md-8 col-12 card-stacked message-stacked">
              <div className="card shadow-line chat chat-panel">
                <div className="p-3 chat-header">
                  <div className="d-flex">
                    <div className="w-100 d-flex pl-0">
                      <img className="rounded-circle shadow avatar-sm mr-3 chat-profile-picture" src="https://user-images.githubusercontent.com/35243461/168796877-f6c8819a-5d6e-4b2a-bd56-04963639239b.jpg" />
                      <div className="mr-3">
                        <a href="!#">
                          <p className="fw-400 mb-0 text-dark-75">Beate Lemoine</p>
                        </a>
                        <p className="sub-caption text-muted text-small mb-0"><i className="la la-clock mr-1"></i>last seen today at 09:15 PM</p>
                      </div>
                    </div>
                    <div className="flex-shrink-0 margin-auto">
                      <a href="#" className="btn btn-sm btn-icon btn-light active text-dark ml-2">
                        <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" className="feather">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="16" x2="12" y2="12"></line>
                          <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                      </a>
                      <a href="#" className="btn btn-sm btn-icon btn-light active text-dark ml-2">
                        <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" className="feather">
                          <polygon points="23 7 16 12 23 17 23 7"></polygon>
                          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                        </svg>
                      </a>
                      <a href="#" className="btn btn-sm btn-icon btn-light active text-dark ml-2">
                        <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" className="feather">
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                      </a>
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
                <div className="d-flex flex-row mb-3 navigation-mobile scrollable-chat-panel chat-panel-scroll">
                  <div className="w-100 p-3 chat-content">
                    {/* <div className="svg36 loader-animate3 horizontal-margin-auto mb-2"></div> */}
                    {/* <div className="text-center letter-space drop-shadow text-uppercase fs-12 w-100 mb-3">Today</div> */}
                    <div className="left-chat-message fs-13 mb-2">
                      <p className="mb-0 mr-3 pr-4">Hi, Quan</p>
                      <div className="message-options">
                        <div className="message-time">06:15</div>
                        <div className="message-arrow"><i className="text-muted la la-angle-down fs-17"></i></div>
                      </div>
                    </div>
                    <div className="d-flex flex-row-reverse mb-2">
                      <div className="right-chat-message fs-13 mb-2">
                        <div className="mb-0 mr-3 pr-4">
                          <div className="d-flex flex-row">
                            <div className="pr-2">Hey, Beate</div>
                            <div className="pr-4"></div>
                          </div>
                        </div>
                        <div className="message-options dark">
                          <div className="message-time">
                            <div className="d-flex flex-row">
                              <div className="mr-2">06:49</div>
                              <div className="svg15 double-check"></div>
                            </div>
                          </div>
                          <div className="message-arrow"><i className="text-muted la la-angle-down fs-17"></i></div>
                        </div>
                      </div>
                    </div>
                    <div className="left-chat-message fs-13 mb-2">
                      <p className="mb-0 mr-3 pr-4">Oh hey, I didn’t see you there. Did you already get a table?</p>
                      <div className="message-options">
                        <div className="message-time">06:52</div>
                        <div className="message-arrow"><i className="text-muted la la-angle-down fs-17"></i></div>
                      </div>
                    </div>
                    <div className="left-chat-message fs-13 mb-2">
                      <p className="mb-0 mr-3 pr-4">I just want to ask</p>
                      <div className="message-options">
                        <div className="message-time">06:53</div>
                        <div className="message-arrow"><i className="text-muted la la-angle-down fs-17"></i></div>
                      </div>
                    </div>
                    <div className="d-flex flex-row-reverse mb-2">
                      <div className="right-chat-message fs-13 mb-2">
                        <div className="mb-0 mr-3 pr-4">
                          <div className="d-flex flex-row">
                            <div className="pr-2">Yeah, right over here.</div>
                            <div className="pr-4"></div>
                          </div>
                        </div>
                        <div className="message-options dark">
                          <div className="message-time">
                            <div className="d-flex flex-row">
                              <div className="mr-2">06:53</div>
                              <div className="svg15 double-check"></div>
                            </div>
                          </div>
                          <div className="message-arrow"><i className="text-muted la la-angle-down fs-17"></i></div>
                        </div>
                      </div>
                    </div>
                    <div className="left-chat-message fs-13 mb-2">
                      <p className="mb-0 mr-3 pr-4">I’m glad we had time to meet up.</p>
                      <div className="message-options">
                        <div className="message-time">06:54</div>
                        <div className="message-arrow"><i className="text-muted la la-angle-down fs-17"></i></div>
                      </div>
                    </div>
                    <div className="d-flex flex-row-reverse mb-2">
                      <div className="right-chat-message fs-13 mb-2">
                        <div className="mb-0 mr-3 pr-4">
                          <div className="d-flex flex-row">
                            <div className="pr-2">;)</div>
                            <div className="pr-4"></div>
                          </div>
                        </div>
                        <div className="message-options dark">
                          <div className="message-time">
                            <div className="d-flex flex-row">
                              <div className="mr-2">06:57</div>
                              <div className="svg15 double-check"></div>
                            </div>
                          </div>
                          <div className="message-arrow"><i className="text-muted la la-angle-down fs-17"></i></div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-row-reverse mb-2">
                      <div className="right-chat-message fs-13 mb-2">
                        <div className="mb-0 mr-3 pr-4">
                          <div className="d-flex flex-row">
                            <div className="pr-4">Me too. So, what’s going on?</div>
                            <div className="pr-4"></div>
                          </div>
                        </div>
                        <div className="message-options dark">
                          <div className="message-time">
                            <div className="d-flex flex-row">
                              <div className="mr-2">06:57</div>
                              <div className="svg15 double-check"></div>
                            </div>
                          </div>
                          <div className="message-arrow"><i className="text-muted la la-angle-down fs-17"></i></div>
                        </div>
                      </div>
                    </div>
                    <div className="left-chat-message fs-13 mb-2">
                      <p className="mb-0 mr-3 pr-4">Oh, not much. You?</p>
                      <div className="message-options">
                        <div className="message-time">07:05</div>
                        <div className="message-arrow"><i className="text-muted la la-angle-down fs-17"></i></div>
                      </div>
                    </div>
                    <div className="d-flex flex-row-reverse mb-2">
                      <div className="right-chat-message fs-13 mb-2">
                        <div className="d-flex flex-row">
                          <div className="pr-2">Not much. Hey, how did your interview go? Wasn’t that today?</div>
                          <div className="pr-4"></div>
                        </div>
                        <div className="message-options dark">
                          <div className="message-time">
                            <div className="d-flex flex-row">
                              <div className="mr-2">07:06</div>
                              <div className="svg15 double-check"></div>
                            </div>
                          </div>
                          <div className="message-arrow"><i className="text-muted la la-angle-down fs-17"></i></div>
                        </div>
                      </div>
                    </div>
                    <div className="left-chat-message fs-13 mb-2">
                      <p className="mb-0 mr-3 pr-4">Oh, yeah. I think it went well. I don’t know if I got the job yet, but they said they would call in a few days.</p>
                      <div className="message-options">
                        <div className="message-time">07:09</div>
                        <div className="message-arrow"><i className="text-muted la la-angle-down fs-17"></i></div>
                      </div>
                    </div>
                    <div className="d-flex flex-row-reverse mb-2">
                      <div className="right-chat-message fs-13 mb-2">
                        <div className="mb-0 mr-3 pr-4">
                          <div className="d-flex flex-row">
                            <div className="pr-2">Well, I’m sure you did great. Good luck.</div>
                            <div className="pr-4"></div>
                          </div>
                        </div>
                        <div className="message-options dark">
                          <div className="message-time">
                            <div className="d-flex flex-row">
                              <div className="mr-2">07:12</div>
                              <div className="svg15 double-check"></div>
                            </div>
                          </div>
                          <div className="message-arrow"><i className="text-muted la la-angle-down fs-17"></i></div>
                        </div>
                      </div>
                    </div>
                    <div className="left-chat-message fs-13 mb-2">
                      <p className="mb-0 mr-3 pr-4">Thanks. I’m just happy that it’s over. I was really nervous about it.</p>
                      <div className="message-options">
                        <div className="message-time">07:16</div>
                        <div className="message-arrow"><i className="text-muted la la-angle-down fs-17"></i></div>
                      </div>
                    </div>
                    <div className="d-flex flex-row-reverse mb-2">
                      <div className="right-chat-message fs-13 mb-2">
                        <div className="d-flex flex-row">
                          <div className="pr-2">I can understand that. I get nervous before interviews, too</div>
                          <div className="pr-4"></div>
                        </div>
                        <div className="message-options dark">
                          <div className="message-time">
                            <div className="d-flex flex-row">
                              <div className="mr-2">07:21</div>
                              <div className="svg15 double-check"></div>
                            </div>
                          </div>
                          <div className="message-arrow"><i className="text-muted la la-angle-down fs-17"></i></div>
                        </div>
                      </div>
                    </div>
                    <div className="left-chat-message fs-13 mb-2">
                      <p className="mb-0 mr-3 pr-4">Well, thanks for being supportive. I appreciate it.</p>
                      <div className="message-options">
                        <div className="message-time">07:24</div>
                        <div className="message-arrow"><i className="text-muted la la-angle-down fs-17"></i></div>
                      </div>
                    </div>
                    <div className="left-chat-message fs-13 mb-2">
                      <p className="mb-0 mr-3 pr-4">Hey Quan, If you are free now we can meet tonight ?</p>
                      <div className="message-options">
                        <div className="message-time">08:21</div>
                        <div className="message-arrow"><i className="text-muted la la-angle-down fs-17"></i></div>
                      </div>
                    </div>
                    <span ref={lastMessageRef}></span>
                  </div>
                </div>
                <div className="chat-search pl-3 pr-3">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Write a message" />
                    <div className="input-group-append prepend-white">
                      <span className="input-group-text pl-2 pr-2">
                        <i className="chat-upload-trigger fs-19 bi bi-file-earmark-plus ml-2 mr-2"></i>
                        <i className="fs-19 bi bi-emoji-smile ml-2 mr-2"></i>
                        <i className="fs-19 bi bi-camera ml-2 mr-2"></i>
                        <i className="fs-19 bi bi-cursor ml-2 mr-2"></i>
                        <div className="chat-upload">
                          <div className="d-flex flex-column">
                            <div className="p-2">
                              <button type="button" className="btn btn-secondary btn-md btn-icon btn-circle btn-blushing">
                                <i className="fs-15 bi bi-camera"></i>
                              </button>
                            </div>
                            <div className="p-2">
                              <button type="button" className="btn btn-success btn-md btn-icon btn-circle btn-blushing">
                                <i className="fs-15 bi bi-file-earmark-plus"></i>
                              </button>
                            </div>
                            <div className="p-2">
                              <button type="button" className="btn btn-warning btn-md btn-icon btn-circle btn-blushing">
                                <i className="fs-15 bi bi-person"></i>
                              </button>
                            </div>
                            <div className="p-2">
                              <button type="button" className="btn btn-danger btn-md btn-icon btn-circle btn-blushing">
                                <i className="fs-15 bi bi-card-image"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
}
export default ChatContent