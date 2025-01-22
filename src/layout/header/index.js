import React, { useState, useEffect, useRef, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
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
  MenuList,
  MenuItem,
  Grow,
  ClickAwayListener,
  Paper,
  Popper,
} from "@material-ui/core";
import {
  FastfoodOutlined as FastfoodOutlinedIcon,
  ShoppingCart as ShoppingCartIcon,
  Menu as MenuIcon,
  MoveToInbox as InboxIcon,
  AccountCircle as AccountCircleIcon,
  ExitToApp as ExitToAppIcon,
  ListAlt as ListAltIcon,
} from "@material-ui/icons";
import useStyles from "./_headerStyle";
import {
  FirebaseContext,
  UserContext,
  ShoppingCartContext,
} from "../../context";
import {
  LOGIN_PATH,
  HOME_PATH,
  MENUS_PATH,
  SHOPPING_CART_PATH,
  ORDER_LIST_PATH,
  PROFILE_PATH,
} from "../../constant/path";
import { STORAGE_SHOPPING_CART } from "../../constant/storage";
import { COLLECTION_SHOPPING_CART } from "../../constant/collection";

function Header() {
  const [anchor, setAnchor] = useState(false);
  const [open, setOpen] = useState(false);
  const [totalProduct, setTotalProduct] = useState(0);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const prevOpen = useRef(open);
  const anchorRef = useRef(null);
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const { db, signOut } = useContext(FirebaseContext);
  const { status } = useContext(ShoppingCartContext);
  const { isLogin, id: userId } = useContext(UserContext);

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  };

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  useEffect(() => {
    if (isLogin) {
      db.collection(COLLECTION_SHOPPING_CART)
        .where("user_id", "==", userId)
        .get()
        .then((querySnapshot) => {
          let data = [];
          querySnapshot.forEach((doc) => {
            data.push({ ...doc.data() });
          });
          setTotalProduct(data.length);
        });
    } else {
      let shoppingCart = localStorage.getItem(STORAGE_SHOPPING_CART);
      shoppingCart = shoppingCart ? JSON.parse(shoppingCart) : [];
      setTotalProduct(shoppingCart.length);
    }
  }, [isLogin, status]);

  // return focus to the button when we transitioned from !open -> open
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setAnchor((prevState) => !prevState);
  };

  const handleAccountClick = (e) => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleProfileClick = () => {
    setOpen(false);
    history.push(PROFILE_PATH);
  };

  const handleOrderListClick = () => {
    setOpen(false);
    history.push(ORDER_LIST_PATH);
  };

  const handleLogoutClick = () => {
    signOut();
    setOpen(false);
    history.push(HOME_PATH);
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
            <Grid item xs={8} md={10} className={classes.navbarItemsCenter}>
              <IconButton aria-label="website icon" color="inherit">
                <FastfoodOutlinedIcon />
                <Typography variant="h6" className={classes.title}>
                  Eat Burger
                </Typography>
              </IconButton>
              <Typography
                variant="h6"
                className={classes.homeLink}
                style={{
                  color: currentPath === HOME_PATH ? "#f50057" : "#fff",
                }}
                onClick={handleHomeClick}
              >
                Home
              </Typography>
              <Typography
                variant="h6"
                className={classes.menusLink}
                style={{
                  color: currentPath === MENUS_PATH ? "#f50057" : "#fff",
                }}
                onClick={handleMenusClick}
              >
                Menus
              </Typography>
            </Grid>
            <Grid item xs={2} md={2} className={classes.navbarItemsRight}>
              {isLogin ? (
                <div className={classes.account}>
                  <IconButton
                    ref={anchorRef}
                    aria-label="Account Logo"
                    color="inherit"
                    aria-controls={open ? "menu-list-grow" : undefined}
                    aria-haspopup="true"
                    onClick={handleAccountClick}
                  >
                    <AccountCircleIcon />
                  </IconButton>
                  <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal
                    className={classes.paper}
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === "bottom"
                              ? "center top"
                              : "center bottom",
                        }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList
                              autoFocusItem={open}
                              id="menu-list-grow"
                              onKeyDown={handleListKeyDown}
                            >
                              <MenuItem onClick={handleProfileClick}>
                                Profile
                              </MenuItem>
                              <MenuItem onClick={handleOrderListClick}>
                                Order List
                              </MenuItem>
                              <MenuItem onClick={handleLogoutClick}>
                                Logout
                              </MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </div>
              ) : (
                <Typography
                  variant="h6"
                  className={classes.loginLink}
                  onClick={handleLoginClick}
                >
                  Login
                </Typography>
              )}
              <IconButton
                edge="end"
                aria-label={`show ${totalProduct} new items in Shopping Cart`}
                color="inherit"
                onClick={handleShoppingCartClick}
              >
                {totalProduct > 0 ? (
                  <Badge badgeContent={totalProduct} color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
                ) : (
                  <ShoppingCartIcon />
                )}
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="top"
        open={anchor}
        onClose={toggleDrawer}
        classes={{
          root: classes.drawer,
          paperAnchorTop: classes.paperAnchorTop,
        }}
      >
        <div
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
            {isLogin ? (
              <>
                <ListItem button>
                  <ListItemIcon className={classes.menuItem}>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Profile"
                    onClick={handleProfileClick}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIcon className={classes.menuItem}>
                    <ListAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Order List"
                    onClick={handleOrderListClick}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIcon className={classes.menuItem}>
                    <ExitToAppIcon />
                  </ListItemIcon>
                  <ListItemText primary="Logout" onClick={handleLogoutClick} />
                </ListItem>
              </>
            ) : (
              <ListItem button>
                <ListItemIcon className={classes.menuItem}>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Login" onClick={handleLoginClick} />
              </ListItem>
            )}
          </List>
        </div>
      </Drawer>
    </>
  );
}

export default Header;
