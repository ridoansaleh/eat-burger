import React from "react";
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
import { ORDER_PATH } from "../../../utils/path";
import { BURGER_LIST } from "../../../dummy";

function MenusList() {
  const classes = useStyles();
  const history = useHistory();

  const handleOrderClick = () => {
    history.push(ORDER_PATH);
  };

  return (
    <div className={classes.menus}>
      <h2 className={classes.menusTitle}>Our Menus</h2>
      <div className={classes.list}>
        {BURGER_LIST.map((item, index) => (
          <Card className={classes.menuItem} key={index}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={item.image}
                title={item.name}
                alt={item.credit}
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
