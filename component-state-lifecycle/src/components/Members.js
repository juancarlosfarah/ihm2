import React, { useState } from 'react';
import { List, IconButton } from '@material-ui/core';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import Member from './Member';
import NewMember from './NewMember';

const Members = ({ members }) => {
  const [expanded, setExpanded] = useState(false);
  const [currentMembers, setCurrentMembers] = useState(members);
  return (
    <>
      <List>
        {
          currentMembers.map(member => {
            const { name, id } = member;
            return (
              <Member
                key={id}
                name={name}
                id={id}
              />
            );
          })
        }
      </List>
      <IconButton
        onClick={() => setExpanded(!expanded)}
      >
        {
          expanded ?
            <ExpandLess /> :
            <ExpandMore />
        }
      </IconButton>
      { expanded && <NewMember currentMembers={currentMembers} setMembers={setCurrentMembers} setExpanded={setExpanded}/> }
    </>
  );
};

export default Members;
