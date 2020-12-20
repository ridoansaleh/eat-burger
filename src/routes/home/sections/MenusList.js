import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import ProductsSkeleton from "../../../components/ProductsSkeleton";
import Product from "../../../components/Product";
import DialogAuthentication from "../../../components/Authentication";
import useStyles from "./_menusListStyle";
import { FirebaseContext, UserContext } from "../../../context";
import { ORDER_PATH, LOGIN_PATH } from "../../../constant/path";
import { STORAGE_ORDER_LIST } from "../../../constant/storage";
import { COLLECTION_PRODUCTS } from "../../../constant/collection";

function MenusList() {
  const [products, setProducts] = useState([]);
  const [displayAuth, setDisplayAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const classes = useStyles();
  const history = useHistory();

  const { db } = useContext(FirebaseContext);
  const { isLogin } = useContext(UserContext);

  useEffect(() => {
    db.collection(COLLECTION_PRODUCTS)
      .limit(9)
      .get()
      .then((querySnapshot) => {
        let data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setProducts(data);
        setLoading(false);
      });
  }, []);

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

  return (
    <div className={classes.menus}>
      <h2 className={classes.menusTitle}>Our Menus</h2>
      <div className={classes.list}>
        {loading ? (
          <ProductsSkeleton />
        ) : (
          <>
            {products.map((item, index) => (
              <Product
                key={index}
                item={item}
                handleOrderClick={() => handleOrderClick(item)}
              />
            ))}
          </>
        )}
      </div>
      <DialogAuthentication
        isOpen={displayAuth}
        onDialogClose={() => setDisplayAuth(false)}
        onLoginClick={handleLoginClick}
      />
    </div>
  );
}

export default MenusList;
