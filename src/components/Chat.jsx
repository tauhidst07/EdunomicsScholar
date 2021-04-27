// import ".././styles/chat.css";

import React, { Component } from "react";
import gir from "../media/gir.jpeg";

import {
  Widget,
  addResponseMessage,
  addLinkSnippet,
  addUserMessage,
} from "react-chat-widget";

import "react-chat-widget/lib/styles.css";

class Chat extends Component {
  componentDidMount() {
    addResponseMessage("Hi How are you!");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  };

  render() {
    return (
      <div className="chat">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={gir}
          title="Rakesh Baghel"
          subtitle="edunomics"
        />
      </div>
    );
  }
}

export default Chat;
