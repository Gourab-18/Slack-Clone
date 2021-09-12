import React from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { useDispatch } from "react-redux";
import { enterRoom } from "../features/appSlice";
// Destructuring means tearing apart
const SidebarOption = ({ Icons, title, addChannelOption, id }) => {
  // Note: We can't just write the material UI icons inside brackets..We have to use them like components
  //   To access data in our frontend we will use react firebase hooks
  const dispatch = useDispatch();
  const addChannel = () => {
    const channelName = prompt("Enter channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    } else {
      alert("Can't add empty channel");
    }
  };
  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };
  //   To use addChannel options we will use firebase
  // Use npm add firebase

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {/* We will use conditional renderong here.. If one is false then it won't display anything..else it will display the 2nd one */}
      {/* Look at the inline styling here */}
      {/* We have to use the property of inline CSS as object */}
      {/* The first {} is for JS property and the second one is for taking in object */}
      {Icons && <Icons style={{ color: "white", padding: 10, fontSize: 20 }} />}
      {/* The second part will work when we don't give icons as input */}
      {Icons ? (
        <p>{title}</p>
      ) : (
        <SideOptionChannel>
          <p>#</p>
          {title}
          {/* The above title will be entered by user and will be retrieved via firebase */}
        </SideOptionChannel>
      )}
    </SidebarOptionContainer>
  );
};

export default SidebarOption;
const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  > p {
    color: white;
    font-size: 20px;
    margin-top: -5px;
  }
  > p:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const SideOptionChannel = styled.p`
  display: flex;
  color: white;
  font-size: 100px;
  padding-left: 10px;
  /* margin-left: 10px; */
  > p {
    margin-right: 20px;
  }
`;
// Redux is like a global store where it extracts the memory stored somewhere in our project(helps in updating global store)
