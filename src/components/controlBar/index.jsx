import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { mapStateToProps, mapDispatchToProps } from './_props';
import { stylesControlBar as styles } from './_styles';

class ControlBar extends Component {
  constructor(props) {
    super(props);
    this.handleSun = this.handleSun.bind(this);
    this.handleWater = this.handleWater.bind(this);
    this.handleNutrients = this.handleNutrients.bind(this);
  }

  handleSun() {
    this.props.updateSun(this.props.sun);
    this.props.checkPlantIsSick();
    this.props.checkPlantCanGrow();
  }

  handleWater() {
    this.props.updateWater(this.props.water);
    this.props.checkPlantIsSick();
    this.props.checkPlantCanGrow();
  }

  handleNutrients() {
    this.props.updateNutrients(this.props.nutrients);
    this.props.checkPlantIsSick();
    this.props.checkPlantCanGrow();
  }

  render() {
    const { classes, sun, water, nutrients } = this.props;
    return (
      <div className={classes.root}>
        <Button
          variant="outlined"
          className={classes.button}
          onClick={this.handleSun}
        >
          {`Sun = ${sun}`}
        </Button>
        <Button
          variant="outlined"
          className={classes.button}
          onClick={this.handleWater}
        >
          {`Water = ${water}`}
        </Button>
        <Button
          variant="outlined"
          className={classes.button}
          onClick={this.handleNutrients}
        >
          {`Nutrients = ${nutrients}`}
        </Button>
      </div>
    );
  }
}

ControlBar.propTypes = {
  classes: PropTypes.object.isRequired,
  sun: PropTypes.number.isRequired,
  water: PropTypes.number.isRequired,
  nutrients: PropTypes.number.isRequired,
  updateSun: PropTypes.func.isRequired,
  updateWater: PropTypes.func.isRequired,
  updateNutrients: PropTypes.func.isRequired,
  checkPlantIsSick: PropTypes.func.isRequired,
  checkPlantCanGrow: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(ControlBar));
