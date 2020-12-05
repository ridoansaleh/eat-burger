import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    minHeight: "calc(100vh - 318px)",
    [theme.breakpoints.up("md")]: {
      paddingTop: "50px",
    },
  },
  wrapper: {
    display: "flex",
    maxWidth: "1280px",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  menuCategoryMobile: {
    marginLeft: "10px",
    marginTop: "10px",
    marginBottom: "10px",
    width: "calc(100vw - 20px)",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  menuCategoryDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
      width: "250px",
    },
  },
  selectWrapper: {
    width: "100%",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    padding: "0 2px",
  },
  menusContainer: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "20px",
      width: "calc(1024px - 250px)",
    },
    [theme.breakpoints.up("lg")]: {
      width: "calc(1280px - 250px)",
    },
  },
  searchField: {
    width: "calc(100vw - 20px)",
    height: "40px",
    marginLeft: "10px",
    [theme.breakpoints.up("md")]: {
      marginLeft: "0",
      width: "400px",
    },
  },
  burgerList: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "30px",
    maxWidth: "1000px",
  },
  notFoundWrapper: {
    width: "100%",
    height: "40vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "23px",
    [theme.breakpoints.up("md")]: {
      fontSize: "33px",
    },
  },
  notFoundText: {
    width: "100%",
    overflowWrap: "break-word",
    textAlign: "center",
  },
  menuItem: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "250px",
    },
    margin: "10px",
  },
  media: {
    height: "300px",
  },
  addCartBtn: {
    marginTop: "7px",
  },
}));

export default useStyles;
