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
  deleteWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
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
  paymentContainer: {
    marginTop: "30px",
    padding: "0 20px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
  },
  backButton: {
    marginRight: "10px",
  },
}));

export default useStyles;
