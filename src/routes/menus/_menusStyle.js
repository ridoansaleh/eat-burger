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
  menuCategory: {
    [theme.breakpoints.up("md")]: {
      width: "250px",
    },
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
}));

export default useStyles;
