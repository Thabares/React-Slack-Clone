import React from 'react';
import styled from 'styled-components';
import SidebarOption from './SidebarOption';
import CreateIcon from '@material-ui/icons/Create';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import AddIcon from '@material-ui/icons/Add';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db, auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Sidebar() {
  const [user] = useAuthState(auth);
  const [channels, loading, error] = useCollection(db.collection('rooms'));
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Slack</h2>
          <h3>
            <FiberManualRecordIcon></FiberManualRecordIcon>
            {user.displayName}
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>

      <SidebarOption Icon={InsertCommentIcon} title='Threads'></SidebarOption>
      <SidebarOption
        Icon={InboxIcon}
        title='Mentions & reactions'
      ></SidebarOption>
      <SidebarOption Icon={DraftsIcon} title='Saved items'></SidebarOption>
      <SidebarOption
        Icon={BookmarkBorderIcon}
        title='Channel browser'
      ></SidebarOption>
      <SidebarOption
        Icon={PeopleAltIcon}
        title='People & user groups'
      ></SidebarOption>
      <SidebarOption Icon={AppsIcon} title='Apps'></SidebarOption>
      <SidebarOption Icon={FileCopyIcon} title='File browser'></SidebarOption>
      <SidebarOption Icon={ExpandLessIcon} title='Show less'></SidebarOption>

      <hr />

      <SidebarOption Icon={ExpandLessIcon} title='Channels'></SidebarOption>

      <hr />

      <SidebarOption
        Icon={AddIcon}
        addChannelOption
        title='Add Channel'
      ></SidebarOption>

      {channels?.docs.map((doc) => (
        <SidebarOption
          key={doc.id}
          id={doc.id}
          title={doc.data().name}
        ></SidebarOption>
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  background-color: var(--slack-color);
`;
const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;
const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    margin-bottom: 5px;
    font-size: 15px;
    font-weight: 900px;
  }
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
