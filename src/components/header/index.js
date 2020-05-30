import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  IconButton,
  Badge,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  FastfoodOutlined as FastfoodOutlinedIcon,
  ShoppingCart as ShoppingCartIcon,
  Menu as MenuIcon,
  MoveToInbox as InboxIcon,
} from "@material-ui/icons";
import useStyles from "./_headerStyle";
import {
  LOGIN_PATH,
  HOME_PATH,
  MENUS_PATH,
  SHOPPING_CART_PATH,
} from "../../utils/path";

function Header() {
  const [anchor, setAnchor] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setAnchor((prevState) => !prevState);
  };

  const handleHomeClick = () => {
    history.push(HOME_PATH);
  };

  const handleMenusClick = () => {
    history.push(MENUS_PATH);
  };

  const handleLoginClick = () => {
    history.push(LOGIN_PATH);
  };

  const handleShoppingCartClick = () => {
    history.push(SHOPPING_CART_PATH);
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" className={classes.navbar}>
          <Toolbar className={classes.toolbar}>
            <Grid container className={classes.innerNavbar}>
              <Grid item xs={2} md={0} className={classes.hamburgerIcon}>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid item xs={8} md={10} className={classes.middle}>
                <IconButton aria-label="website icon" color="inherit">
                  <FastfoodOutlinedIcon />
                  <Typography variant="h6" className={classes.title}>
                    Eat Burger
                  </Typography>
                </IconButton>
                <Typography
                  variant="h6"
                  className={classes.homeLink}
                  onClick={handleHomeClick}
                >
                  Home
                </Typography>
                <Typography
                  variant="h6"
                  className={classes.menusLink}
                  onClick={handleMenusClick}
                >
                  Menus
                </Typography>
              </Grid>
              <Grid item xs={2} md={2} className={classes.right}>
                <Typography
                  variant="h6"
                  className={classes.loginLink}
                  onClick={handleLoginClick}
                >
                  Login
                </Typography>
                <IconButton
                  edge="end"
                  aria-label="show 4 new items in Shopping Cart"
                  color="inherit"
                  onClick={handleShoppingCartClick}
                >
                  <Badge badgeContent={4} color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
      <Drawer
        anchor="top"
        open={anchor}
        onClose={toggleDrawer}
        classes={{
          paperAnchorTop: classes.paperAnchorTop,
        }}
      >
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            <ListItem button>
              <ListItemText primary="Home" onClick={handleHomeClick} />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Menus" onClick={handleMenusClick} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Login" onClick={handleLoginClick} />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
}

export default Header;
