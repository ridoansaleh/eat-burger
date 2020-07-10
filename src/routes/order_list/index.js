import React from "react";
import useStyles from "./_orderListStyle";

function OrderList(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h2>Order List</h2>
    </div>
  );
}

export default OrderList;
