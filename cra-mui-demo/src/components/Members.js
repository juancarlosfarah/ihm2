import React, { useEffect, useState } from 'react';
import { List, IconButton } from '@material-ui/core';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import Member from './Member';
import NewMember from './NewMember';
import Loader from './Loader';

const Members = ({ members }) => {
  const [expanded, setExpanded] = useState(false);
  const [
    currentMembers,
    setCurrentMembers,
  ] = useState(null);

  useEffect(() => {
    const fetchMembers = () => {
      return new Promise((resolve) => {
        setTimeout(() => { resolve(members) }, 1000);
      });
    };
    fetchMembers().then((members) => {
      setCurrentMembers(members)
    });
  }, [members]);

  if (!currentMembers) {
    return <Loader />;
  }

  if (!currentMembers.length) {
    return 'No Members';
  }

  return (
    <div>
      <List>
        {
          currentMembers.map(member => {
            const { name, id } = member;
            return (
              <Member key={id} name={name} id={id} />
            );
          })
        }
      </List>
      <IconButton onClick={() => setExpanded(!expanded)}>
        { expanded ? <ExpandLess /> : <ExpandMore /> }
      </IconButton>
      {
        expanded &&
          (
            <NewMember
              currentMembers={currentMembers}
              setCurrentMembers={setCurrentMembers}
              setExpanded={setExpanded}
            />
          )
      }
    </div>
  );
};

export default Members;
