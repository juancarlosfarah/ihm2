import React from 'react';
import { List } from '@material-ui/core';
import Member from './Member';

const Members = ({ members }) => {
  return (
    <List>
      {
        members.map(member => {
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
  );
};

export default Members;
