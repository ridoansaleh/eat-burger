import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import burgerImage from "../assets/burger.jpg";
import useStyles from "./_menusListStyle";

const items = [
  {
    name: "Burger A",
    description: "",
  },
  {
    name: "Burger B",
    description: "",
  },
  {
    name: "Burger C",
    description: "",
  },
  {
    name: "Burger D",
    description: "",
  },
  {
    name: "Burger E",
    description: "",
  },
];

function MenusList() {
  const classes = useStyles();

  return (
    <div className={classes.menus}>
      <h2 className={classes.menusTitle}>Our Menus</h2>
      <div className={classes.list}>
        {items.map((item, index) => (
          <Card className={classes.menuItem} key={index}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={burgerImage}
                title="Delicious Burger"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.name}
                </Typography>
                <Button variant="contained" fullWidth color="primary">
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
