import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { useRef, useState, useEffect } from "react";
import firebase from "firebase";
import { db } from "../firebase";
const ChatInput = ({ channelName, channelId }) => {
  const [input, setInput] = useState("");
  const msg = (e) => {
    e.preventDefault();
    // console.log(channelId);
    if (!channelId) return false;
    // The above will show reference to the input field
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Gourab ",
    });
    setInput("");
    // We need to get value from the db(i.e the chat section)
  };
  // useEffect(() => {}, []);

  return (
    <div>
      <InputChatContainer>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`    ${channelName}'s messages`}
          />
          <Button hidden type="submit" onClick={msg}>
            Send
          </Button>
        </form>
      </InputChatContainer>
    </div>
  );
};

export default ChatInput;
const InputChatContainer = styled.div`
  > form {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 20px;
    /* left: 30px; */
  }
  > form > input {
    margin-left: 40px;
    width: 1100px;
    height: 30px;
    border-radius: 10px;
    border: 2px solid gray;
    outline: none;
  }

  > form > button {
    display: none;
  }
`;
