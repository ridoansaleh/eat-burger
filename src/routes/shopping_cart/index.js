import React, { useState, useEffect, useContext } from "react";
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
import DialogAuthentication from "../../components/Authentication";
import {
  FirebaseContext,
  UserContext,
  ShoppingCartContext,
} from "../../context";
import { MENUS_PATH, ORDER_PATH, LOGIN_PATH } from "../../constant/path";
import {
  STORAGE_SHOPPING_CART,
  STORAGE_ORDER_LIST,
} from "../../constant/storage";

function QuantityField({ item, updateProduct }) {
  const [total, setTotal] = useState(item.count);
  const classes = useStyles();

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

  useEffect(() => {
    updateProduct(total, item);
  }, [total]);

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

const getTotalPrice = (arr) => {
  const { total_price } = arr.reduce(
    (ac, cr) => ({
      total_price: parseInt(ac.total_price) + parseInt(cr.total_price),
    }),
    { total_price: 0 }
  );
  return total_price;
};

function ShoppingCart() {
  const [displayAuth, setDisplayAuth] = useState(false);
  const [products, setProducts] = useState([]);
  const [totalOrder, setTotalOrder] = useState(0);

  const classes = useStyles();
  const history = useHistory();

  const { db } = useContext(FirebaseContext);
  const { onSetStatus } = useContext(ShoppingCartContext);
  const { isLogin, id: userId } = useContext(UserContext);

  const getProducts = () => {
    if (isLogin) {
      db.collection("shopping_cart")
        .where("user_id", "==", userId)
        .get()
        .then((querySnapshot) => {
          let data = [];
          querySnapshot.forEach((doc) => {
            data.push({ ...doc.data() });
          });
          setProducts(data);
        });
    } else {
      let shoppingCart = localStorage.getItem(STORAGE_SHOPPING_CART);
      shoppingCart = shoppingCart ? JSON.parse(shoppingCart) : [];
      setProducts(shoppingCart);
    }
  };

  useEffect(() => {
    getProducts();
  }, [isLogin]);

  useEffect(() => {
    setTotalOrder(getTotalPrice(products));
  }, [products]);

  const updateProduct = (total, item) => {
    if (isLogin) {
      db.collection("shopping_cart")
        .doc(item.cart_id)
        .update({
          ...item,
          count: total,
          total_price: total * item.price,
        })
        .then(() => {
          console.log("Document successfully updated!");
          getProducts();
        })
        .catch((error) => {
          console.error("Error updating document: ", error);
        });
    } else {
      let shoppingCart = localStorage.getItem(STORAGE_SHOPPING_CART);
      shoppingCart = shoppingCart ? JSON.parse(shoppingCart) : [];
      const modifiedData = shoppingCart.map((d) => {
        if (d.cart_id === item.cart_id) {
          return {
            ...d,
            count: total,
            total_price: total * item.price,
          };
        }
        return d;
      });
      localStorage.setItem(STORAGE_SHOPPING_CART, JSON.stringify(modifiedData));
      setProducts(modifiedData);
    }
  };

  const handleShoppingBtnClick = () => {
    history.push(MENUS_PATH);
  };

  const handleOrderBtnClick = () => {
    if (isLogin) {
      const modifiedProducts = products.map((e) => {
        let data = { ...e };
        delete data.user_id;
        return data;
      });
      const data = JSON.stringify(modifiedProducts);
      sessionStorage.setItem(STORAGE_ORDER_LIST, data);
      history.push(ORDER_PATH);
    } else {
      setDisplayAuth(true);
    }
  };

  const handleLoginClick = () => {
    history.push(LOGIN_PATH);
  };

  const handleDeleteProduct = (cartId) => {
    if (isLogin) {
      db.collection("shopping_cart")
        .doc(cartId)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
          getProducts();
          onSetStatus(`changed ${Date.now()}`);
        })
        .catch((error) => {
          console.error("Error delating document: ", error);
        });
    } else {
      let shoppingCart = localStorage.getItem(STORAGE_SHOPPING_CART);
      shoppingCart = shoppingCart ? JSON.parse(shoppingCart) : [];
      const modifiedData = shoppingCart.filter((d) => d.cart_id !== cartId);
      localStorage.setItem(STORAGE_SHOPPING_CART, JSON.stringify(modifiedData));
      setProducts(modifiedData);
      onSetStatus(`changed ${Date.now()}`);
    }
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
                {products.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>
                      <QuantityField item={row} updateProduct={updateProduct} />
                    </TableCell>
                    <TableCell align="center">
                      <span>$ {row.total_price}</span>
                    </TableCell>
                    <TableCell>
                      <DeleteOutlineIcon
                        className={classes.deleteIcon}
                        onClick={() => handleDeleteProduct(row.cart_id)}
                      />
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
            disabled={products.length === 0}
            className={classes.cartButton}
            onClick={handleOrderBtnClick}
          >
            Order
          </Button>
        </div>
      </div>
      <DialogAuthentication
        isOpen={displayAuth}
        onDialogClose={() => setDisplayAuth(false)}
        onLoginClick={handleLoginClick}
      />
    </div>
  );
}

export default ShoppingCart;
