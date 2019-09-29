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
    this.handleResetGame = this.handleResetGame.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.growth !== prevProps.growth) {
      this.props.checkPlantGrowthGoal(this.props.growth);
    }
  }

  handleSun() {
    this.props.updateSun(this.props.sun);
    this.props.checkPlantIsAlive();
    this.props.checkPlantCanGrow();
  }

  handleWater() {
    this.props.updateWater(this.props.water);
    this.props.checkPlantIsAlive();
    this.props.checkPlantCanGrow();
  }

  handleNutrients() {
    this.props.updateNutrients(this.props.nutrients);
    this.props.checkPlantIsAlive();
    this.props.checkPlantCanGrow();
  }

  handleResetGame() {
    this.props.resetGame();
  }

  render() {
    const {
      classes,
      sun,
      water,
      nutrients,
      isAlive,
      growth,
      isFullyGrown,
    } = this.props;
    return (
      <div className={classes.content}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.title}>
              Plant
            </Typography>
            <Button
              variant="outlined"
              color="inherit"
              onClick={this.handleResetGame}
            >
              Reset
            </Button>
          </Toolbar>
        </AppBar>
        <div className={classes.toolbar} />
        <div className={classes.rootControls}>
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
        {!isFullyGrown ? (
          <div className={classes.rootPrompt}>
            <Typography variant="h6" color="inherit">
              Help me grow!
            </Typography>
          </div>
        ) : (
          <div className={classes.rootPrompt}>
            <Typography variant="h6" color="inherit">
              Time to harvest!
            </Typography>
          </div>
        )}
        {!isFullyGrown ? (
          <div className={classes.rootPlant}>
            <div className={classes.plant}>
              <PlantSVG isAlive={isAlive} growth={growth} />
            </div>
          </div>
        ) : (
          <div className={classes.rootSuccess}>
            <div className={classes.shears}>
              <img src={'/garden-shears.png'} alt=""></img>
            </div>
          </div>
        )}
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
  growth: PropTypes.number.isRequired,
  isFullyGrown: PropTypes.bool.isRequired,
  checkPlantIsAlive: PropTypes.func.isRequired,
  checkPlantCanGrow: PropTypes.func.isRequired,
  checkPlantGrowthGoal: PropTypes.func.isRequired,
  updateSun: PropTypes.func.isRequired,
  updateWater: PropTypes.func.isRequired,
  updateNutrients: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(Plant));
