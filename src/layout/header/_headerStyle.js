import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navbar: {
    background: "black",
    minWidth: "320px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
  },
  innerNavbar: {
    maxWidth: "1280px",
  },
  hamburgerIcon: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    height: "66px",
  },
  navbarItemsCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-start",
    },
  },
  title: {
    marginLeft: "5px",
  },
  homeLink: {
    display: "none",
    marginLeft: "40px",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  menusLink: {
    display: "none",
    marginLeft: "30px",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  navbarItemsRight: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  account: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  paper: {
    zIndex: "400",
  },
  loginLink: {
    display: "none",
    marginRight: "20px",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  drawer: {
    top: "60px !important",
    "& > .MuiBackdrop-root": {
      top: "60px !important",
    },
  },
  paperAnchorTop: {
    top: "60px",
  },
  menuItem: {
    minWidth: "28px",
  },
}));

export default useStyles;
