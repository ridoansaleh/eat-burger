import React from "react";
import { TextField } from "@material-ui/core";
import useStyles from "../_orderStyle";

function Step2() {
  const classes = useStyles();

  return (
    <form noValidate autoComplete="off" className={classes.deliveryForm}>
      <TextField label="Full Name" variant="outlined" size="small" />
      <TextField label="Address" variant="outlined" size="small" />
      <TextField
        label="Phone Number"
        variant="outlined"
        size="small"
        type="number"
      />
    </form>
  );
}

export default Step2;
