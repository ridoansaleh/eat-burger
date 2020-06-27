import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    minHeight: "calc(100vh - 318px)",
    paddingTop: "20px",
    [theme.breakpoints.up("md")]: {
      paddingTop: "100px",
    },
  },
  menuWrapper: {
    display: "flex",
    flexDirection: "column",
    overflowX: "auto",
    [theme.breakpoints.up("md")]: {
      justifyContent: "space-between",
      flexDirection: "row",
    },
  },
  table: {
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
  },
  quantityInput: {
    width: "160px",
    height: "35px",
  },
  innerInput: {
    textAlign: "center",
  },
  deleteIcon: {
    cursor: "pointer",
  },
  subTotal: {
    [theme.breakpoints.up("md")]: {
      width: "28%",
    },
  },
  textInfo: {
    fontSize: "10px",
    marginTop: "30px",
  },
  cartButton: {
    width: "180px",
    marginTop: "20px",
    marginLeft: "10px",
    [theme.breakpoints.up("md")]: {
      marginLeft: "0",
    },
  },
}));

export default useStyles;
