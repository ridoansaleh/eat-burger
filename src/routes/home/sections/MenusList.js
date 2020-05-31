import React from "react";
import { useHistory } from "react-router-dom";
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
import { ORDER_PATH } from "../../../utils/path";

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
                image={burgerImage}
                title="Delicious Burger"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.name}
                </Typography>
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
