import React, { useState, useEffect, useContext } from "react";
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
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Select,
  MenuItem,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { Search as SearchIcon } from "@material-ui/icons";
import useStyles from "./_menusStyle";
import { FirebaseContext } from "../../database";
import { ORDER_PATH } from "../../utils/path";

const CATEGORY_LIST = [
  "All",
  "Latest Event",
  "Promotion",
  "Favorite",
  "New Burger",
  "Group Menu",
  "Best Deals",
];

const sixBoxSkeleton = [1, 2, 3, 4, 5, 6];

function Menus() {
  const [search, setSearch] = useState("");
  const [finalSearch, setFinalSearch] = useState("");
  const [burgerList, setBurgerList] = useState([]);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  const classes = useStyles();
  const history = useHistory();

  const { db } = useContext(FirebaseContext);

  const getProducts = () => {
    db.collection("products")
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

  const handleOrderClick = () => {
    history.push(ORDER_PATH);
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
                            <Typography
                              gutterBottom
                              component="h5"
                            ></Typography>
                          </Skeleton>
                          <Skeleton animation="wave" width="30%" height="20px">
                            <Typography
                              gutterBottom
                              component="h5"
                            ></Typography>
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
                {burgerList.map((item, index) => (
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
                          fullWidth
                          variant="contained"
                          color="primary"
                          onClick={handleOrderClick}
                        >
                          Order
                        </Button>
                        <Button
                          fullWidth
                          variant="contained"
                          color="secondary"
                          className={classes.addCartBtn}
                        >
                          Add to Cart
                        </Button>
                      </CardContent>
                    </CardActionArea>
                  </Card>
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
    </div>
  );
}

export default Menus;
