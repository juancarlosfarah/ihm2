import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import Group from './Group';
import Loader from './Loader';

const useStyles = makeStyles(theme => ({
  backLink: {
    marginLeft: theme.spacing(2),
  },
}));

const ViewGroup = ({ groups }) => {
  const { id } = useParams();
  const classes = useStyles();

  if (!groups.length) {
    return <Loader />
  }

  const group = groups.find(group => group.id === id);
  const { name, project, members } = group;
  return (
    <div>
      <Group
        id={id}
        name={name}
        project={project}
        members={members}
      />
      <Link to="/" className={classes.backLink}>
        Back
      </Link>
    </div>
  )
};

export default ViewGroup;
