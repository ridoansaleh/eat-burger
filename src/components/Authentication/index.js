import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
} from "@material-ui/core";
import { LockOutlined as LockOutlinedIcon } from "@material-ui/icons";
import useStyles from "./_authenticationStyle";

function DialogAuthentication(props) {
  const classes = useStyles();

  return (
    <Dialog
      onClose={props.onDialogClose}
      aria-labelledby="signup-success-dialog"
      open={props.isOpen}
    >
      <DialogTitle id="signup-success-dialog">Authentication</DialogTitle>
      <DialogContent dividers className={classes.content}>
        <LockOutlinedIcon className={classes.lockIcon} />
        <Typography variant="h3" component="h3" className={classes.title}>
          Please login!
        </Typography>
        <Typography gutterBottom>
          You're <b>not</b> login yet. Before you make an order, we need you to
          login into our system.
        </Typography>
        <Typography gutterBottom>
          Click{" "}
          <span className={classes.loginText} onClick={props.onLoginClick}>
            here
          </span>{" "}
          to login.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.okBtn}
          onClick={props.onDialogClose}
        >
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
}

DialogAuthentication.propTypes = {
  isOpen: PropTypes.bool,
  onLoginClick: PropTypes.func,
  onDialogClose: PropTypes.func,
};

DialogAuthentication.defaultProps = {
  isOpen: false,
  onLoginClick: () => null,
  onDialogClose: () => null,
};

export default DialogAuthentication;
