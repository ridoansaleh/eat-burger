import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
  Divider,
  List,
  ListItem,
  ListItemText,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import useStyles from "./_menusStyle";
import burgerImage from "./assets/burger.jpg";
import { ORDER_PATH } from "../../utils/path";

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

function Menus() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(1);
  const classes = useStyles();
  const history = useHistory();

  const handleClickSearch = () => {};

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClickCategory = (val) => {
    setActiveCategory(val);
  };

  const handleOrderClick = () => {
    history.push(ORDER_PATH);
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.menuCategory}>
          <Divider />
          <List component="nav" aria-label="secondary mailbox folders">
            <ListItem
              button
              style={activeCategory === 1 ? { backgroundColor: "pink" } : {}}
              onClick={() => handleClickCategory(1)}
            >
              <ListItemText primary="Latest Event" />
            </ListItem>
            <ListItem
              button
              style={activeCategory === 2 ? { backgroundColor: "pink" } : {}}
              onClick={() => handleClickCategory(2)}
            >
              <ListItemText primary="Promotion" />
            </ListItem>
            <ListItem
              button
              style={activeCategory === 3 ? { backgroundColor: "pink" } : {}}
              onClick={() => handleClickCategory(3)}
            >
              <ListItemText primary="Favorite" />
            </ListItem>
            <ListItem
              button
              style={activeCategory === 4 ? { backgroundColor: "pink" } : {}}
              onClick={() => handleClickCategory(4)}
            >
              <ListItemText primary="New Burger" />
            </ListItem>
            <ListItem
              button
              style={activeCategory === 5 ? { backgroundColor: "pink" } : {}}
              onClick={() => handleClickCategory(5)}
            >
              <ListItemText primary="Group Menu" />
            </ListItem>
            <ListItem
              button
              style={activeCategory === 6 ? { backgroundColor: "pink" } : {}}
              onClick={() => handleClickCategory(6)}
            >
              <ListItemText primary="Best Deals" />
            </ListItem>
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
      </div>
    </div>
  );
}

export default Menus;
