import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Group from './Group';
import Loader from '../common/Loader';

const useStyles = makeStyles(theme => {
  return {
    back: {
      marginLeft: theme.spacing(2),
    }
  };
});

const ViewGroup = ({ groups }) => {
  const classes = useStyles();
  const { id } = useParams();
  if (!groups.length) {
    return (
      <Loader />
    );
  }
  const group = groups.find(group => group.id === id);
  const { id: groupId, name, project, members } = group;
  return (
    <>
      <Group
        id={groupId}
        name={name}
        project={project}
        members={members}
      />
      <Link to="/" className={classes.back}>
        Back
      </Link>
    </>
  );
};

export default ViewGroup;
