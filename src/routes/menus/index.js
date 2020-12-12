import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
  Divider,
  List,
  ListItem,
  ListItemText,
  Button,
  Select,
  MenuItem,
} from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import ProductsSkeleton from "../../components/ProductsSkeleton";
import Product from "../../components/Product";
import DialogAuthentication from "../../components/Authentication";
import useStyles from "./_menusStyle";
import {
  FirebaseContext,
  UserContext,
  ShoppingCartContext,
} from "../../context";
import { ORDER_PATH, LOGIN_PATH } from "../../constant/path";
import {
  COLLECTION_PRODUCTS,
  COLLECTION_SHOPPING_CART,
} from "../../constant/collection";
import {
  STORAGE_ORDER_LIST,
  STORAGE_SHOPPING_CART,
} from "../../constant/storage";

const CATEGORY_LIST = [
  "All",
  "Latest Event",
  "Promotion",
  "Favorite",
  "New Burger",
  "Group Menu",
  "Best Deals",
];

function Menus() {
  const [search, setSearch] = useState("");
  const [finalSearch, setFinalSearch] = useState("");
  const [burgerList, setBurgerList] = useState([]);
  const [category, setCategory] = useState("All");
  const [displayAuth, setDisplayAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const classes = useStyles();
  const history = useHistory();

  const { db } = useContext(FirebaseContext);
  const { onSetStatus } = useContext(ShoppingCartContext);
  const { isLogin, id: userId } = useContext(UserContext);

  const getProducts = () => {
    db.collection(COLLECTION_PRODUCTS)
      .get()
      .then((querySnapshot) => {
        let data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setBurgerList(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleClickSearch = () => {
    if (search === "" || search === " ") {
      getProducts();
      return;
    }
    const foundList = burgerList.filter((d) =>
      d.name.toLowerCase().includes(search.toLowerCase())
    );
    setBurgerList(foundList);
    setFinalSearch(search);
  };

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleLoginClick = () => {
    history.push(LOGIN_PATH);
  };

  const handleOrderClick = (selectedProduct) => {
    if (isLogin) {
      const data = JSON.stringify([
        {
          ...selectedProduct,
          count: 1,
          total_price: selectedProduct.price,
        },
      ]);
      sessionStorage.setItem(STORAGE_ORDER_LIST, data);
      history.push(ORDER_PATH);
    } else {
      setDisplayAuth(true);
    }
  };

  const handleAddToCartClick = (selectedProduct) => {
    if (isLogin) {
      db.collection(COLLECTION_SHOPPING_CART)
        .where("user_id", "==", userId)
        .where("id", "==", selectedProduct.id)
        .get()
        .then((querySnapshot) => {
          let data = null;
          querySnapshot.forEach((doc) => {
            data = doc.data();
          });
          if (!data) {
            const cart_id = uuidv4();
            db.collection(COLLECTION_SHOPPING_CART)
              .doc(cart_id)
              .set({
                ...selectedProduct,
                user_id: userId,
                cart_id,
                count: 1,
                total_price: selectedProduct.price,
              })
              .then(() => {
                console.log("Document successfully written!");
                onSetStatus(`changed ${Date.now()}`);
              })
              .catch((error) => {
                console.error("Error writing document: ", error);
              });
          }
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    } else {
      let shoppingCart = localStorage.getItem(STORAGE_SHOPPING_CART);
      shoppingCart = shoppingCart ? JSON.parse(shoppingCart) : [];
      const isExist = shoppingCart.some((d) => d.id === selectedProduct.id);
      if (isExist) return;
      const finalData = [
        ...shoppingCart,
        {
          ...selectedProduct,
          cart_id: uuidv4(),
          count: 1,
          total_price: selectedProduct.price,
        },
      ];
      localStorage.setItem(STORAGE_SHOPPING_CART, JSON.stringify(finalData));
      onSetStatus(`changed ${Date.now()}`);
    }
  };

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.menuCategoryMobile}>
          <FormControl className={classes.selectWrapper}>
            <Select
              labelId="menu-category-label"
              id="menu-category-id"
              value={category}
              onChange={handleChange}
            >
              <MenuItem value="" disabled>
                Select Menu's Category
              </MenuItem>
              {CATEGORY_LIST.map((d) => (
                <MenuItem key={d} value={d}>
                  {d}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className={classes.menuCategoryDesktop}>
          <Divider />
          <List component="nav" aria-label="secondary mailbox folders">
            {CATEGORY_LIST.map((d) => (
              <ListItem
                key={d}
                button
                style={category === d ? { backgroundColor: "pink" } : {}}
                onClick={() => {
                  getProducts();
                  setCategory(d);
                }}
              >
                <ListItemText primary={d} />
              </ListItem>
            ))}
          </List>
        </div>
        <div className={classes.menusContainer}>
          <div>
            <FormControl variant="outlined">
              <OutlinedInput
                value={search}
                className={classes.searchField}
                placeholder="Search Menu.."
                onChange={handleChangeSearch}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="search menu"
                      onClick={handleClickSearch}
                      edge="end"
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={0}
              />
            </FormControl>
          </div>
          <div className={classes.burgerList}>
            {loading ? (
              <ProductsSkeleton />
            ) : (
              <>
                {burgerList.map((item, index) => (
                  <Product
                    key={index}
                    item={item}
                    displayCartBtn
                    handleOrderClick={() => handleOrderClick(item)}
                    handleAddToCartClick={() => handleAddToCartClick(item)}
                  />
                ))}
              </>
            )}
            {search && burgerList.length === 0 && (
              <div className={classes.notFoundWrapper}>
                <p className={classes.notFoundText}>
                  <b>{finalSearch}</b>
                  {` `}
                  is not found
                </p>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => getProducts()}
                >
                  Reset
                </Button>
              </div>
            )}
          </div>
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

export default Menus;
