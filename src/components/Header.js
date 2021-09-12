import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const Header = () => {
  // const [user] = useAuthState(auth);
  return (
    <HeaderContainer>
      {/* We will have 3 sections one left one right one middle */}
      <HeaderLeft>
        {/* Icons */}
        <HeaderAvatar />
        <AccessTimeIcon />
      </HeaderLeft>
      <HeaderSearch>
        <SearchIcon />

        <input id="1" type="text" placeholder="Hii" />
      </HeaderSearch>
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
};
// Use vscode styled components extension
// Here CSS is never going to overlab
export default Header;
const HeaderSearch = styled.div`
  flex: 0.4;
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: #421f44;
  border: 1px solid gray;
  padding: 10px 30px;
  margin-top: 5px;
  height: 30%;
  margin-left: 20px;

  > input {
    border: none;
    outline: none;
    text-align: center;
    background-color: transparent;
    font-weight: bold;
    color: white;
    /* color: red; */
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  background-color: var(--slack-color);
  /* To change color of time icon */
  color: white;
  height: 50px;
  /* justify-content: space-between; */
`;
const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
`;
const HeaderAvatar = styled(Avatar)`
  :hover {
    opacity: 0.8;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  flex: 0.3;
  /* flex-direction: row; */
  position: relative;
  justify-content: center;
  align-items: center;
  /* Targetting material UI icon */
  > .MuiSvgIcon-root {
    margin-left: 250px;
  }
`;

// AccessTimeIcon = styled.div`
//   color: white;
// `;

// .MuiSvgIcon-root{}
