import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Paper, Typography, makeStyles } from '@material-ui/core';
import Members from './Members';

const useStyles = makeStyles(theme => ({
  group: {
    padding: theme.spacing(2),
    margin: theme.spacing(),
  },
  clickableName: {
    cursor: 'pointer',
  }
}));

const Group = ({ id, name, project, members }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const groupPathname = `/groups/${id}`;

  const active = groupPathname === location.pathname;

  const handleClick = () => {
    if (!active) {
      history.push(groupPathname);
    }
  };

  return (
    <Paper className={classes.group}>
      <Typography
        variant="h6"
        color="primary"
        onClick={handleClick}
        className={!active ? classes.clickableName : ''}
      >
        { name }
      </Typography>
      <Typography variant="body1" color="secondary">
        { project }
      </Typography>
      <Members members={members} />
    </Paper>
  );
};

export default Group;
