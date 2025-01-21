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
  verifyEmailBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  succeedIcon: {
    fontSize: "120px",
    color: "green",
    [theme.breakpoints.up("lg")]: {
      fontSize: "140px",
    }
  },
  failedIcon: {
    fontSize: "120px",
    color: "red",
    [theme.breakpoints.up("lg")]: {
      fontSize: "140px",
    }
  },
  verifyLabel: {
    fontSize: "18px",
    marginBottom: "10px",
    [theme.breakpoints.up("lg")]: {
      fontSize: "24px",
    }
  },
  verifyDescription: {
    textAlign: "center"
  },
  boxForm: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  input: {
    marginBottom: "20px"
  },
  resetPasswordBtn: {
    marginBottom: "14px"
  }
}));

export default useStyles;
