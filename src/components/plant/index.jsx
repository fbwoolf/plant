import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import PlantSVG from './PlantSVG';
import { mapStateToProps, mapDispatchToProps } from './_props';
import { stylesPlant as styles } from './_styles';

class Plant extends Component {
  constructor(props) {
    super(props);
    this.handleCheckSun = this.handleCheckSun.bind(this);
    this.handleCheckWater = this.handleCheckWater.bind(this);
    this.handleCheckNutrients = this.handleCheckNutrients.bind(this);
  }

  handleCheckSun() {}

  handleCheckWater() {}

  handleCheckNutrients() {}

  render() {
    const { classes } = this.props;
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
        <div className={classes.rootButton}>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={this.handleCheckSun}
          >
            Sun
          </Button>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={this.handleCheckWater}
          >
            Water
          </Button>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={this.handleCheckNutrients}
          >
            Nutrients
          </Button>
        </div>
        <div className={classes.rootPlant}>
          <div className={classes.plant}>
            <PlantSVG />
          </div>
        </div>
      </div>
    );
  }
}

Plant.propTypes = {
  classes: PropTypes.object.isRequired,
  sun: PropTypes.number.isRequired,
  water: PropTypes.number.isRequired,
  nutrients: PropTypes.number.isRequired,
  isAlive: PropTypes.bool.isRequired,
  setPlantIsAlive: PropTypes.func.isRequired,
  setPlantIsNotAlive: PropTypes.func.isRequired,
  increaseSun: PropTypes.func.isRequired,
  decreaseSun: PropTypes.func.isRequired,
  increaseWater: PropTypes.func.isRequired,
  decreaseWater: PropTypes.func.isRequired,
  increaseNutrients: PropTypes.func.isRequired,
  decreaseNutrients: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(Plant));
