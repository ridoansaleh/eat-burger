import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import ProductsSkeleton from "../../../components/ProductsSkeleton";
import Product from "../../../components/Product";
import useStyles from "./_menusListStyle";
import { FirebaseContext } from "../../../database";
import { ORDER_PATH } from "../../../constant/path";
import { STORAGE_ORDER_LIST } from "../../../constant/storage";

function MenusList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const classes = useStyles();
  const history = useHistory();

  const { db } = useContext(FirebaseContext);

  useEffect(() => {
    db.collection("products")
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

  const handleOrderClick = (selectedProduct) => {
    const data = JSON.stringify([
      {
        ...selectedProduct,
        count: 1,
        total_price: selectedProduct.price,
      },
    ]);
    sessionStorage.setItem(STORAGE_ORDER_LIST, data);
    history.push(ORDER_PATH);
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
                id={index}
                item={item}
                handleOrderClick={() => handleOrderClick(item)}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default MenusList;
