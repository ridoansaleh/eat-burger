import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
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
  middle: {
    display: "flex",
    alignItems: "center",
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
  right: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginLink: {
    display: "none",
    marginRight: "20px",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  list: {
    width: "auto",
  },
  paperAnchorTop: {
    top: "60px",
  },
}));

export default useStyles;
