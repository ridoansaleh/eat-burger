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
import beefBurger from "../assets/classic-beef-burger.jpg";
import elkBurger from "../assets/elk-burger.jpg";
import portobelloBurger from "../assets/raw-portobello-burger.jpg";
import turkeyBurger from "../assets/turkey-burger.jpg";
import veggieBurger from "../assets/veggie-burger.jpg";
import bisonBurger from "../assets/bison-burgers.jpg";
import salmonBurger from "../assets/salmon-burger.jpg";
import blackBeanBurger from "../assets/pumpkin-veggie-burger.jpg";
import { ORDER_PATH } from "../../../utils/path";

const items = [
  {
    name: "Beef Burgers",
    image: beefBurger,
    credit: "https://www.eatthis.com/types-of-burgers/",
    price: 20,
  },
  {
    name: "Elk Burgers",
    image: elkBurger,
    credit: "https://www.eatthis.com/types-of-burgers/",
    price: 15,
  },
  {
    name: "Portobello Mushroom Burgers",
    image: portobelloBurger,
    credit: "https://www.eatthis.com/types-of-burgers/",
    price: 10,
  },
  {
    name: "Turkey Burgers",
    image: turkeyBurger,
    credit: "https://www.eatthis.com/types-of-burgers/",
    price: 14,
  },
  {
    name: "Veggie Burgers",
    image: veggieBurger,
    credit: "https://www.eatthis.com/types-of-burgers/",
    price: 9,
  },
  {
    name: "Bison Burgers",
    image: bisonBurger,
    credit: "https://www.eatthis.com/types-of-burgers/",
    price: 25,
  },
  {
    name: "Wild Salmon Burgers",
    image: salmonBurger,
    credit: "https://www.eatthis.com/types-of-burgers/",
    price: 24,
  },
  {
    name: "Black Bean Burgers",
    image: blackBeanBurger,
    credit: "https://www.eatthis.com/types-of-burgers/",
    price: 17,
  },
];

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
        {items.map((item, index) => (
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
