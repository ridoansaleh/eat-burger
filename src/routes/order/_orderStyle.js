import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    minHeight: "calc(100vh - 318px)",
    [theme.breakpoints.up("md")]: {
      paddingTop: "40px",
    },
  },
  wrapper: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "800px",
    },
  },
  stepper: {
    [theme.breakpoints.down("sm")]: {
      padding: "0",
      paddingTop: "15px",
    },
  },
  content: {
    minHeight: "340px",
  },
  menuWrapper: {
    display: "flex",
    flexDirection: "column",
    marginTop: "15px",
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
    marginTop: "15px",
    [theme.breakpoints.up("md")]: {
      width: "28%",
      marginTop: "0",
    },
  },
  textInfo: {
    fontSize: "10px",
    marginTop: "30px",
  },
  deliveryWrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: "15px",
    padding: "0 3px 25px",
  },
  deliveryForm: {
    display: "flex",
    flexDirection: "column",
    height: "180px",
    justifyContent: "space-between",
    marginTop: "30px",
    padding: "0 10px",
    [theme.breakpoints.up("md")]: {
      width: "400px",
    },
  },
  address: {
    padding: "15px",
    fontSize: "1rem",
    margin: "15px 0",
    borderColor: "rgba(0, 0, 0, 0.23)",
    borderRadius: "5px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  },
  paymentWrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: "15px",
    padding: "20px 3px",
  },
  paymentBox: {
    padding: "0 20px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
    "& > button": {
      width: "100px",
      [theme.breakpoints.up("md")]: {
        width: "150px",
      },
    },
  },
  backButton: {
    marginRight: "10px",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default useStyles;
