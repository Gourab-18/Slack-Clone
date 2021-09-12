import React from "react";
// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import Chat from "./components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./components/Login";
function App() {
  // The below line does all the authentiaction for us
  const [user, loading] = useAuthState(auth);
  return (
    <div className="App">
      {/* <h1>Hii Slack</h1> */}
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Header />
            {/* To take up entire height we use height:100vh */}
            {/* We have to style the entire app body so that it takes up the entire size */}
            <Appbody>
              <Sidebar />

              <Switch>
                {/* We will get icons from material UI */}
                {/* We will also use styled components */}

                <Route exact path="/">
                  {/* Here we will be having the chat */}
                  <Chat />
                </Route>
              </Switch>
            </Appbody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
const Appbody = styled.div`
  display: flex;
  /* flex-direction: column;

  height: 100vh; */
`;
