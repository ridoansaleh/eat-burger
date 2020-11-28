import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    minHeight: "calc(100vh - 318px)",
    [theme.breakpoints.up("md")]: {
      paddingTop: "70px",
      minHeight: "initial",
    },
  },
  title: {
    textAlign: "center",
  },
  boxForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      width: "293px",
    },
  },
  field: {
    marginBottom: "15px",
    borderColor: "red",
  },
  gender: {
    flexDirection: "row",
  },
  errorGender: {
    color: "red",
  },
  address: {
    padding: "15px",
    fontSize: "1rem",
    marginBottom: "15px",
    borderColor: "rgba(0, 0, 0, 0.23)",
    borderRadius: "5px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  },
  errorAddress: {
    borderColor: "red",
    "&:focus": {
      outline: "red",
    },
  },
  registerBtn: {
    marginTop: "20px",
  },
}));

export default useStyles;
