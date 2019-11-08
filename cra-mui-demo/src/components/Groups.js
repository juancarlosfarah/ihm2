import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import Group from './Group';

const styles = {
  groups: {
    overflowX: 'hidden',
  }
};

class Groups extends React.Component {
  render() {
    const { groups, classes } = this.props;
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
