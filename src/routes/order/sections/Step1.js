import React, { useState, useEffect } from "react";
import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Card,
  CardContent,
  Typography,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import {
  Add as AddIcon,
  Remove as RemoveIcon,
  DeleteOutline as DeleteOutlineIcon,
} from "@material-ui/icons";
import useStyles from "../_orderStyle";
import { STORAGE_ORDER_LIST } from "../../../constant/storage";

function QuantityField({ id, count, orderList, onSetOrderList }) {
  const [total, setTotal] = useState(count);
  const classes = useStyles();

  useEffect(() => {
    setTotal(count);
  }, [count]);

  useEffect(() => {
    let newOrderList = orderList.map((order) => {
      if (order.id === id) {
        return { ...order, count: total, total_price: total * order.price };
      }
      return order;
    });
    onSetOrderList(newOrderList);
  }, [total]);

  const handleDecreaseClick = () => {
    if (total !== 1) {
      setTotal((prevState) => prevState - 1);
    }
  };

  const handleIncreaseClick = () => {
    if (total !== 10) {
      setTotal((prevState) => prevState + 1);
    }
  };

  return (
    <OutlinedInput
      id="input-with-icon-adornment"
      value={total}
      className={classes.quantityInput}
      classes={{
        input: classes.innerInput,
      }}
      startAdornment={
        <InputAdornment position="start">
          <IconButton
            aria-label="increase quantity"
            onClick={handleDecreaseClick}
          >
            <RemoveIcon />
          </IconButton>
        </InputAdornment>
      }
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="increase quantity"
            onClick={handleIncreaseClick}
          >
            <AddIcon />
          </IconButton>
        </InputAdornment>
      }
    />
  );
}

function Step1({ onGetTotalPrice }) {
  let storageOrderList = sessionStorage.getItem(STORAGE_ORDER_LIST);
  storageOrderList = storageOrderList ? JSON.parse(storageOrderList) : [];

  const [orderList, setOrderList] = useState(storageOrderList);
  const [totalOrder, setTotalOrder] = useState(
    onGetTotalPrice(storageOrderList)
  );

  const classes = useStyles();

  useEffect(() => {
    sessionStorage.setItem(STORAGE_ORDER_LIST, JSON.stringify(orderList));
    setTotalOrder(onGetTotalPrice(orderList));
  }, [orderList]);

  const handleRemoveProduct = (product) => {
    let newOrderList = orderList.filter((order) => order.id !== product.id);
    setOrderList(newOrderList);
  };

  return (
    <div className={classes.menuWrapper}>
      <div className={classes.table}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>MENU ITEM</TableCell>
                <TableCell align="center">QUANTITY</TableCell>
                <TableCell>SUBTOTAL</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderList.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>
                    <QuantityField
                      id={row.id}
                      count={row.count}
                      orderList={orderList}
                      onSetOrderList={setOrderList}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <span>$ {row.total_price}</span>
                  </TableCell>
                  <TableCell>
                    {orderList.length > 1 && (
                      <DeleteOutlineIcon
                        className={classes.deleteIcon}
                        onClick={() => handleRemoveProduct(row)}
                      />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className={classes.subTotal}>
        <Card>
          <CardContent>
            <Typography component="h2">ORDER TOTAL*</Typography>
            <Typography variant="body2" component="p">
              $ {totalOrder}
            </Typography>
            <Typography
              color="textSecondary"
              component="p"
              className={classes.textInfo}
            >
              *The price is not include with tax yet.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Step1;
