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
    this.handleSun = this.handleSun.bind(this);
    this.handleWater = this.handleWater.bind(this);
    this.handleNutrients = this.handleNutrients.bind(this);
  }

  handleSun() {
    this.props.updateSun(this.props.sun);
  }

  handleWater() {
    this.props.updateWater(this.props.water);
  }

  handleNutrients() {
    this.props.updateNutrients(this.props.nutrients);
  }

  render() {
    const { classes, isAlive } = this.props;
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
            onClick={this.handleSun}
          >
            Sun
          </Button>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={this.handleWater}
          >
            Water
          </Button>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={this.handleNutrients}
          >
            Nutrients
          </Button>
        </div>
        <div className={classes.rootPlant}>
          <div className={classes.plant}>
            <PlantSVG isAlive={isAlive} />
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
  updateSun: PropTypes.func.isRequired,
  updateWater: PropTypes.func.isRequired,
  updateNutrients: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(Plant));
