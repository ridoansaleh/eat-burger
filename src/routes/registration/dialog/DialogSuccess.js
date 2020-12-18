import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
} from "@material-ui/core";
import { CheckCircleOutlined as CheckCircleOutlinedIcon } from "@material-ui/icons";
import useStyles from "./_dialogSuccessStyle";
import useWindowSize from "../../../hook/useWindowSize";

function DialogSuccess(props) {
  const classes = useStyles();
  const isMobile = useWindowSize();

  return (
    <Dialog
      aria-labelledby="signup-success-dialog"
      fullScreen={isMobile}
      open={props.isOpen}
      onClose={props.onDialogClose}
    >
      <DialogTitle id="signup-success-dialog">Sign Up Success</DialogTitle>
      <DialogContent dividers className={classes.content}>
        <CheckCircleOutlinedIcon className={classes.successIcon} />
        <Typography variant="h3" component="h3" className={classes.title}>
          Congratulations!
        </Typography>
        <Typography gutterBottom>
          Your account was created successfully. We need you to <b>verify</b>{" "}
          your email before login to our system.
        </Typography>
        <Typography gutterBottom>
          This action is needed to prevent spam orders coming to our system.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.okBtn}
          onClick={props.onDialogClose}
        >
          OK
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default DialogSuccess;
