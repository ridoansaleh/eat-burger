import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      padding: "15px 80px",
    },
  },
  dialogHead: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  lockIcon: {
    fontSize: "6.2rem",
  },
  title: {
    marginBottom: "15px",
    fontSize: "2rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem",
    },
  },
  loginBtn: {
    width: "150px",
    marginTop: "20px",
  },
}));

export default useStyles;
