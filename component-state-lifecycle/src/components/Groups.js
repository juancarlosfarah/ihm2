import React, { Component } from 'react';
import { Grid, withStyles } from '@material-ui/core';
import Group from './Group';
import Loader from './common/Loader';

const styles = {
  groups: {
    overflowX: 'hidden',
  },
};

class Groups extends Component {
  render() {
    const { groups, classes } = this.props;

    if (!groups.length) {
      return (<Loader />);
    }
    return (
      <div className={classes.groups}>
        <Grid container spacing={2}>
          {
            groups.map(group => {
              const { name, project, members } = group;
              return (
                <Grid item xs={12} sm={6} key={name}>
                  <Group
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
