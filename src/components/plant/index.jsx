import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PlantSVG from './PlantSVG';
import { mapStateToProps, mapDispatchToProps } from './_props';
import { stylesPlant as styles } from './_styles';

class Plant extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.growth !== prevProps.growth) {
      this.props.checkPlantGrowthGoal(this.props.growth);
    }
    this.props.checkPlantHealthScore(this.props.health);
  }
  render() {
    const { classes, growth, isFullyGrown, color } = this.props;
    return !isFullyGrown ? (
      <div className={classes.rootPlant}>
        <div className={classes.plant}>
          <PlantSVG color={color} growth={growth} />
        </div>
      </div>
    ) : (
      <div className={classes.rootSuccess}>
        <div className={classes.shears}>
          <img src={'/garden-shears.png'} alt=""></img>
        </div>
      </div>
    );
  }
}

Plant.propTypes = {
  classes: PropTypes.object.isRequired,
  isFullyGrown: PropTypes.bool.isRequired,
  growth: PropTypes.number.isRequired,
  health: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  checkPlantGrowthGoal: PropTypes.func.isRequired,
  checkPlantHealthScore: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(Plant));
