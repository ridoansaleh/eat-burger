import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
} from "@material-ui/core";
import { Cancel as CancelIcon } from "@material-ui/icons";
import useStyles from "./_dialogFailedStyle";
import useWindowSize from "../../../hook/useWindowSize";

function DialogFailed(props) {
  const classes = useStyles();
  const isMobile = useWindowSize();

  return (
    <Dialog
      aria-labelledby="signup-failed-dialog"
      fullScreen={isMobile}
      open={props.isOpen}
      onClose={props.onDialogClose}
    >
      <DialogTitle id="signup-failed-dialog">Sign Up Failed</DialogTitle>
      <DialogContent dividers className={classes.content}>
        <CancelIcon className={classes.cancelIcon} />
        <Typography variant="h3" component="h3" className={classes.title}>
          Existing Email Found!
        </Typography>
        <Typography gutterBottom>
          We have found that the email you entered has exist in our system. You
          can't create multiple accounts with the same email.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.tryBtn}
          onClick={props.onDialogClose}
        >
          Try new Email
        </Button>
      </DialogContent>
    </Dialog>
  );
}

DialogFailed.propTypes = {
  isOpen: PropTypes.bool,
  onDialogClose: PropTypes.func,
};

DialogFailed.defaultProps = {
  isOpen: false,
  onDialogClose: () => null,
};

export default DialogFailed;
