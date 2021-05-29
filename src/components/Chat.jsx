import React, { useEffect } from "react";
import gir from "../media/gir.jpeg";

import {
  Widget,
  addResponseMessage,
  addLinkSnippet,
  addUserMessage,
} from "react-chat-widget";

import "react-chat-widget/lib/styles.css";
const Chat = () => {
  useEffect(() => {
    addResponseMessage("Hi How are you!");

    // const handleNewUserMessage = (newMessage) => {
    //   console.log(`New message incomig! ${newMessage}`);
    // };
  }, []);

  return (
    <div className="chat">
      <Widget
        // handleNewUserMessage={handleNewUserMessage}
        profileAvatar={gir}
        title="Rakesh Baghel"
        subtitle="edunomics"
      />
    </div>
  );
};

export default Chat;
