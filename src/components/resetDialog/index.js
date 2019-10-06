import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { stylesRestDialog as styles } from './_styles';

const ResetDialog = ({ classes, resetDialogIsOpen, handleClose }) => {
  return (
    <Dialog
      className={classes.dialog}
      open={resetDialogIsOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="xs"
    >
      <DialogTitle id="alert-dialog-title">You lost!</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Take better care of your plant!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Reset
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ResetDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  resetDialogIsOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(ResetDialog);
