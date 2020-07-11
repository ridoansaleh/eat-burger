import React, { useState, useEffect, useRef } from "react";
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
  Menu,
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
  LOGIN_PATH,
  HOME_PATH,
  MENUS_PATH,
  SHOPPING_CART_PATH,
  ORDER_LIST_PATH,
} from "../../utils/path";

function Header() {
  const [anchor, setAnchor] = useState(false);
  const [isLogin, setLogin] = useState(true);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const classes = useStyles();
  const history = useHistory();

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

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
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

  const handleOrderListClick = () => {
    setOpen(false);
    history.push(ORDER_LIST_PATH);
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
                                <MenuItem onClick={handleClose}>
                                  Profile
                                </MenuItem>
                                <MenuItem onClick={handleOrderListClick}>
                                  Order List
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
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
            {isLogin ? (
              <>
                <ListItem button>
                  <ListItemIcon className={classes.menuItem}>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
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
                  <ListItemText primary="Logout" />
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
