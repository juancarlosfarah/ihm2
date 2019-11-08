import React from 'react';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core';
import { PermIdentity } from '@material-ui/icons';

const Member = ({ name, id }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <PermIdentity />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={id}
      />
    </ListItem>
  );
};

export default Member;
