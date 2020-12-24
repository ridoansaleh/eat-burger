import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    minHeight: "calc(100vh - 318px)",
    margin: "0 10px 10px",
    paddingTop: "20px",
    [theme.breakpoints.up("md")]: {
      margin: "0",
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
    marginBottom: "15px",
    [theme.breakpoints.up("md")]: {
      width: "70%",
      marginBottom: "0",
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
    marginRight: "10px",
    [theme.breakpoints.up("md")]: {
      marginRight: "0",
    },
  },
}));

export default useStyles;
