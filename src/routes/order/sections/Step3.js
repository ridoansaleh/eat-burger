import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "../_orderStyle";

function Step3() {
  const classes = useStyles();

  return (
    <div className={classes.paymentContainer}>
      <Typography variant="body2" component="p">
        Total order is $ 33 (Tax included)
      </Typography>
      <Typography
        color="textSecondary"
        component="p"
        className={classes.textInfo}
      >
        1) The payment is using COD (Cash On Delivery) system. <br />
        2) Deliver order will be accepted from within the city.
      </Typography>
    </div>
  );
}

export default Step3;
