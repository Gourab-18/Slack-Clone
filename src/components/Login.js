import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";

const Login = () => {
  const signIn = (e) => {
    e.preventDefault();
    //   Google authentication
    auth.signInWithPopup(provider).catch((e) => alert("Fuck Off"));
  };
  return (
    <div>
      <LoginContainer>
        <InnerSection>
          <img src="data:image/png;base64,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" />
          <br />
          <Button
            type="submit"
            style={{ backgroundColor: "green", color: "white" }}
            onClick={signIn}
          >
            Sign in with Google
          </Button>
        </InnerSection>
      </LoginContainer>
    </div>
  );
};

export default Login;
const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;
const InnerSection = styled.div`
  > button {
    display: flex;
    position: relative;
    top: -60px;
    /* margin-left: 10px; */
    width: 80%;
    margin-left: 20px;
    border-radius: 10px;
  }
`;
