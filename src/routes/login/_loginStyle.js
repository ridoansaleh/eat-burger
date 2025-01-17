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
  boxForm: {
    height: "170px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  forgotPasswordWrapper: {
    textAlign: "right",
    marginBottom: "10px"
  },
  forgotPasswordLink: {
    color: "blue",
    cursor: "pointer",
    fontSize: "12px",
  },
  registrationBox: {
    marginTop: "40px",
  },
  registrationLink: {
    color: "blue",
    cursor: "pointer",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default useStyles;
