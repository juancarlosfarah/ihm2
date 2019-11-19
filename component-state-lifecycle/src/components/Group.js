import React from 'react';
import { Paper, Typography, makeStyles } from '@material-ui/core';
import Members from './Members';

const useStyles = makeStyles(theme => ({
  group: {
    padding: theme.spacing(2),
    margin: theme.spacing(),
  }
}));

const Group = ({ name, project, members }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.group}>
      <Typography variant="h6" color="primary">
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
