import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    background: "black",
    color: "white",
    padding: "10px 20px",
    marginTop: "100px",
  },
  wrapper: {
    display: "flex",
    maxWidth: "1024px",
    margin: "auto",
  },
  left: {
    width: "50%",
  },
  right: {
    display: "flex",
    justifyContent: "flex-end",
    width: "50%",
  },
  socialMediaWrapper: {
    display: "flex",
  },
  socialMediaIcon: {
    marginRight: "10px",
  },
  linkWrapper: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  generalLink: {
    color: "grey",
    textDecoration: "none",
    marginRight: "20px",
    [theme.breakpoints.down("md")]: {
      marginBottom: "10px",
    },
  },
}));

export default useStyles;
