import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import TopAppBar from '../topAppBar';
import ControlBar from '../controlBar';
import Plant from '../plant';
import ResetDialog from '../resetDialog';
import { mapStateToProps, mapDispatchToProps } from './_props';
import { stylesGame as styles } from './_styles';

class Game extends Component {
  constructor(props) {
    super(props);
    this.handleResetGame = this.handleResetGame.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.isFullyGrown !== prevProps.isFullyGrown) {
      this.props.isFullyGrown
        ? this.props.resetDialogOpen()
        : this.props.resetDialogClosed();
    }
  }

  handleOpen = () => {
    this.props.resetDialogOpen();
  };

  handleClose = () => {
    this.props.resetDialogClosed();
    this.props.resetGame();
  };

  handleResetGame() {
    this.props.resetGame();
  }

  render() {
    const { classes, isFullyGrown, resetDialogIsOpen } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.toolbar} />
        <ResetDialog
          resetDialogIsOpen={resetDialogIsOpen}
          handleClose={this.handleClose}
        />
        <TopAppBar handleResetGame={this.handleResetGame} />
        <ControlBar />
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
        <Plant />
      </div>
    );
  }
}

Game.propTypes = {
  classes: PropTypes.object.isRequired,
  resetDialogIsOpen: PropTypes.bool.isRequired,
  isFullyGrown: PropTypes.bool.isRequired,
  checkPlantGrowthGoal: PropTypes.func.isRequired,
  checkHealthScore: PropTypes.func.isRequired,
  resetDialogOpen: PropTypes.func.isRequired,
  resetDialogClosed: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(Game));
