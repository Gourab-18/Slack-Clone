import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

const Sidebar = () => {
  const [channels, loading, error] = useCollection(db.collection("rooms"));
  //   The collection in rooms will noe be stored in channels
  console.log(channels?.docs);
  return (
    <div>
      <SidebarContainer>
        <SidebarHeader>
          <h3>
            Slack-Clone
            <CreateIcon />
          </h3>

          <h5>
            <FiberManualRecordIcon />
            Gourab
          </h5>
          <SidebarInfo></SidebarInfo>
        </SidebarHeader>
        {/* We will be sending values to all the sidebaroptions. The values will be icons and titles */}
        {/* We will have to import the material-ui icons */}
        <SidebarOption Icons={InsertCommentIcon} title="Threads" />
        <SidebarOption Icons={InboxIcon} title="Mentions" />
        <SidebarOption Icons={DraftsIcon} title="Saved items" />
        <SidebarOption Icons={BookmarkBorderIcon} title="Channel browser" />
        <SidebarOption Icons={FileCopyIcon} title="People and groups" />
        <SidebarOption Icons={PeopleAltIcon} title="Apps" />
        <SidebarOption Icons={AppsIcon} title="File browser" />
        <SidebarOption Icons={ExpandLessIcon} title="Show less" />
        <hr />
        <SidebarOption Icons={ExpandMoreIcon} title="Channels" />
        <hr />
        <SidebarOption Icons={AddIcon} title="Add Channel" addChannelOption />

        {channels?.docs.map((doc) => (
          <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
        ))}
      </SidebarContainer>
    </div>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  /* display: flex; */
  flex: 0.4;
  background-color: var(--slack-color);
  height: 100vh;
  width: 200%;
  z-index: -1;
`;

const SidebarHeader = styled.div`
  /* display: flex; */

  > h3 {
    display: flex;
    margin-left: 10px;
    color: white;
  }
  > h3 > .MuiSvgIcon-root {
    border: 2px solid white;
    border-radius: 100%;
    position: relative;
    left: 250px;
    /* background-color: white; */
  }
  > h5 {
    display: flex;
    color: white;
    font-size: 17px;
    align-items: center;
    margin-left: 10px;
    margin-top: 5px;
  }
  > h5 > .MuiSvgIcon-root {
    color: green;
  }
`;
const SidebarInfo = styled.div``;
