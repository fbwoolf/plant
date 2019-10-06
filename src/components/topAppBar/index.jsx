import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { stylesTopAppBar as styles } from './_styles';

const TopAppBar = ({ classes, handleResetGame }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.title}>
          Plant
        </Typography>
        <Button variant="outlined" color="inherit" onClick={handleResetGame}>
          Reset
        </Button>
      </Toolbar>
    </AppBar>
  );
};

TopAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleResetGame: PropTypes.func.isRequired,
};

export default withStyles(styles)(TopAppBar);
