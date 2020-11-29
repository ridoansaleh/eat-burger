import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      padding: "15px 80px",
    },
  },
  successIcon: {
    fontSize: "6.2rem",
  },
  title: {
    marginBottom: "15px",
    fontSize: "2rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem",
    },
  },
  okBtn: {
    width: "150px",
    marginTop: "20px",
  },
}));

export default useStyles;
