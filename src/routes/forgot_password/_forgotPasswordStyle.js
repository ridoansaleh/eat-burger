import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    minHeight: "calc(100vh - 318px)",
    [theme.breakpoints.up("md")]: {
      paddingTop: "70px",
    },
  },
  formWrapper: {
    height: "170px",
    padding: "10px",
    [theme.breakpoints.up("md")]: {
      width: "360px",
    },
  },
  pageTitle: {
    textAlign: "center",
  },
  pageDescription: {
    textAlign: "center",
  },
  boxForm: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  emailInput: {
    marginBottom: "20px"
  },
  sendBtn: {
    marginBottom: "14px"
  }
}));

export default useStyles;
