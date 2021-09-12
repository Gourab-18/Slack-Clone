import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorder";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import ChatInput from "./ChatInput";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Message from "./Message";
const Chat = () => {
  // const chatRef = useRef(null);
  // We want the room id to push messages for different rooms
  const roomId = useSelector(selectRoomId);
  // The below line returns the room details
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );
  // console.log(roomDetails?.docs.data());

  // This stores the messages
  // console.log(roomId);
  const [roomMessages, loading, error] = useCollection(
    // Doubt
    roomId && db.collection("rooms").doc(roomId).collection("messages")
    // .orderBy("timestamp", "asc")
  );
  if (error) {
    console.error(error);
  }
  // console.log(roomDetails?.data().name);
  // console.log(roomMessages);

  // useEffect(() => {
  //   console.log(roomMessages);
  // }, [roomMessages]);
  // useEffect(() => {
  //   chatRef?.current?.scrollIntoView({
  //     behaviour: "smooth",
  //   });
  // }, [roomId, loading]);
  return (
    <ChatContainer>
      {/* <h1>Hii Fucker</h1> */}

      <Header>
        <HeaderLeft>
          <h3>#{`${roomDetails?.data().name}`}</h3>
          <StarBorderOutlinedIcon />
        </HeaderLeft>
        <HeaderRight>
          <h4>
            <InfoOutlinedIcon />
            Details
          </h4>
        </HeaderRight>
      </Header>
      <ChatMessages>
        {/* Here delivering messages feature will be developed */}
        {roomMessages?.docs.map((doc) => {
          console.log(doc.data());
          const { message, timeStamp, user } = doc.data();
          // console.log(message);

          return (
            <>
              <Message
                key={doc.id}
                message={message}
                timeStamp={timeStamp}
                user={user}
              />
            </>
          );
        })}
        {/* {console.log(10)} */}
        <ChatBottom />
      </ChatMessages>
      <ChatInput channelName={roomDetails?.data().name} channelId={roomId} />
    </ChatContainer>
  );
};

export default Chat;
const ChatBottom = styled.div`
  padding-bottom: 200px;
`;

const ChatContainer = styled.div`
  color: black;
  /* margin-left: 500px; */
  /* position: relative; */
  margin-left: 210px;
  /* This helps in putting justify-content:space-between */
  flex: 1;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  /* In order to increase distance with border we use padding bottom */
  padding-bottom: 20px;
  border-bottom: 1px solid gray;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
`;
const ChatMessages = styled.div`
  /* overflow-y: scroll; */
`;
