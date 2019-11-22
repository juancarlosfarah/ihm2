import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import Group from './Group';
import Loader from './Loader';

const styles = {
  groups: {
    overflow: 'hidden',
  }
};

class Groups extends React.Component {
  render() {
    const { groups, classes } = this.props;

    if (!groups.length) {
      return <Loader />;
    }

    return (
      <div className={classes.groups}>
        <Grid container spacing={2}>
          {
            groups.map(group => {
              const { id, name, project, members } = group;
              return (
                <Grid item xs={12} lg={6} key={name}>
                  <Group
                    id={id}
                    name={name}
                    project={project}
                    members={members}
                  />
                </Grid>
              );
            })
          }
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Groups);
