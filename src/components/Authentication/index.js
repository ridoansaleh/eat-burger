import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
} from "@material-ui/core";
import {
  LockOutlined as LockOutlinedIcon,
  Close as CloseIcon,
} from "@material-ui/icons";
import useStyles from "./_authenticationStyle";
import useWindowSize from "../../hook/useWindowSize";

function DialogAuthentication(props) {
  const classes = useStyles();
  const isMobile = useWindowSize();

  return (
    <Dialog
      aria-labelledby="login-required-dialog"
      fullScreen={isMobile}
      open={props.isOpen}
      onClose={props.onDialogClose}
    >
      <DialogTitle
        id="login-required-dialog"
        disableTypography
        className={classes.dialogHead}
      >
        <Typography variant="h6">Authentication</Typography>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={props.onDialogClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers className={classes.content}>
        <LockOutlinedIcon className={classes.lockIcon} />
        <Typography variant="h3" component="h3" className={classes.title}>
          Please login!
        </Typography>
        <Typography gutterBottom>
          You're <b>not</b> login yet. Before you make an order, we need you to
          login into our system.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          className={classes.loginBtn}
          onClick={props.onLoginClick}
        >
          Login
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
