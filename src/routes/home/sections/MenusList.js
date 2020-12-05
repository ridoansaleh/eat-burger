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
import useStyles from "./_menusListStyle";
import { FirebaseContext } from "../../../database";
import { ORDER_PATH } from "../../../utils/path";

function MenusList() {
  const [products, setProducts] = useState([]);

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
      });
  }, []);

  const handleOrderClick = () => {
    history.push(ORDER_PATH);
  };

  return (
    <div className={classes.menus}>
      <h2 className={classes.menusTitle}>Our Menus</h2>
      <div className={classes.list}>
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
                  onClick={handleOrderClick}
                >
                  Order
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default MenusList;
