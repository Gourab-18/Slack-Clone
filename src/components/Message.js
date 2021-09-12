import React from "react";
import styled from "styled-components";
import Gourab from "../assets/gourab.jpeg";
const Message = ({ message, timeStamp, user }) => {
  //   console.log("Hi");
  return (
    <MessageContainer src={Gourab}>
      <h3>
        {user} <span>{new Date(timeStamp?.toDate()).toUTCString()}</span>
      </h3>
      <p>{message}</p>
    </MessageContainer>
  );
};

export default Message;

const MessageContainer = styled.div`
  /* background-color: black; */
  color: black;
  > h3 > span {
    font-size: 15px;
    font-weight: 200;
    color: gray;
    margin-left: 6px;
  }
  > p {
    font-weight: 500;
    margin-top: -5px;
  }
`;
const ImageContaioner = styled.div``;
