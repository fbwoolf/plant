import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { mapStateToProps, mapDispatchToProps } from './_props';
import { stylesPlant as styles } from './_styles';

const Plant = ({ classes, isAlive }) => {
  return (
    <div className={classes.content}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Plant
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
      <div className={classes.root}>
        <Button variant="outlined" className={classes.button}>
          Sun
        </Button>
        <Button variant="outlined" className={classes.button}>
          Water
        </Button>
        <Button variant="outlined" className={classes.button}>
          Nutrients
        </Button>
      </div>
    </div>
  );
};

Plant.propTypes = {
  classes: PropTypes.object.isRequired,
  isAlive: PropTypes.bool.isRequired,
  setPlantIsAlive: PropTypes.func.isRequired,
  setPlantIsNotAlive: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(Plant));
