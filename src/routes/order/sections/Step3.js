import React from "react";
import { Paper, Typography } from "@material-ui/core";
import useStyles from "../_orderStyle";
import { STORAGE_ORDER_LIST } from "../../../constant/storage";

function Step3({ onGetTotalPrice }) {
  const classes = useStyles();

  let storageOrderList = sessionStorage.getItem(STORAGE_ORDER_LIST);
  storageOrderList = storageOrderList ? JSON.parse(storageOrderList) : [];

  let totalOrder = onGetTotalPrice(storageOrderList);
  totalOrder = totalOrder + 0.1 * totalOrder;

  return (
    <Paper classes={{ root: classes.paymentWrapper }}>
      <div className={classes.paymentBox}>
        <Typography variant="body2" component="p">
          Total order is $ {totalOrder} (Tax included)
        </Typography>
        <Typography
          color="textSecondary"
          component="p"
          className={classes.textInfo}
        >
          1) The payment is using COD (Cash On Delivery) system. <br />
          2) The amount of tax is 10% of the total order. <br />
          3) Delivery order will only be accepted from within the city.
        </Typography>
      </div>
    </Paper>
  );
}

export default Step3;
