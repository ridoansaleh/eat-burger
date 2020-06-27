import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
  Button,
} from "@material-ui/core";
import {
  Add as AddIcon,
  Remove as RemoveIcon,
  DeleteOutline as DeleteOutlineIcon,
} from "@material-ui/icons";
import useStyles from "./_shoppingCartStyle";
import { MENUS_PATH, ORDER_PATH } from "../../utils/path";

function QuantityField() {
  const [total, setTotal] = useState(1);
  const classes = useStyles();

  const handleDecreaseClick = () => {
    if (total !== 0) {
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

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0),
  createData("Ice cream sandwich", 237, 9.0),
  createData("Eclair", 262, 16.0),
  createData("Cupcake", 305, 3.7),
  createData("Gingerbread", 356, 16.0),
];

function ShoppingCart() {
  const classes = useStyles();
  const history = useHistory();

  const handleShoppingBtnClick = () => {
    history.push(MENUS_PATH);
  };

  const handleOrderBtnClick = () => {
    history.push(ORDER_PATH);
  };

  return (
    <div className={classes.container}>
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
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>
                      <QuantityField />
                    </TableCell>
                    <TableCell align="center">
                      <span>$ {row.fat}</span>
                    </TableCell>
                    <TableCell>
                      <DeleteOutlineIcon className={classes.deleteIcon} />
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
                $ 30
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
          <Button
            variant="contained"
            color="secondary"
            className={classes.cartButton}
            onClick={handleShoppingBtnClick}
          >
            Continue Shopping
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.cartButton}
            onClick={handleOrderBtnClick}
          >
            Order
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
