import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import useStyles from "./_menusListStyle";
import { FirebaseContext } from "../../../database";
import { ORDER_PATH } from "../../../constant/path";
import { STORAGE_ORDER_LIST } from "../../../constant/storage";

const sixBoxSkeleton = [1, 2, 3, 4, 5, 6];

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
          <>
            {sixBoxSkeleton.map((data) => (
              <Card className={classes.menuItem} key={data}>
                <CardActionArea>
                  <Skeleton
                    variant="rect"
                    animation="wave"
                    classes={{ root: classes.media }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6">
                      <Skeleton animation="wave" />
                    </Typography>
                    <Grid container direction="row" justify="space-between">
                      <Skeleton animation="wave" width="30%" height="20px">
                        <Typography gutterBottom component="h5"></Typography>
                      </Skeleton>
                      <Skeleton animation="wave" width="30%" height="20px">
                        <Typography gutterBottom component="h5"></Typography>
                      </Skeleton>
                    </Grid>
                    <Skeleton variant="rect" animation="wave" />
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </>
        ) : (
          <>
            {products.map((item) => (
              <Card className={classes.menuItem} key={item.id}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={item.image}
                    title={item.name}
                    alt={item.image_credit}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6">
                      {item.name}
                    </Typography>
                    <Grid container direction="row" justify="space-between">
                      <Typography gutterBottom component="h5">
                        Price
                      </Typography>
                      <Typography gutterBottom component="h5">
                        ${item.price}
                      </Typography>
                    </Grid>
                    <Button
                      variant="contained"
                      fullWidth
                      color="primary"
                      onClick={() => handleOrderClick(item)}
                    >
                      Order
                    </Button>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default MenusList;
