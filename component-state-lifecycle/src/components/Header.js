import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          IHM2 - Group Projects
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
