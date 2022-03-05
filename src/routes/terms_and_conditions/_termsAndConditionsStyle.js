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
  content: {
    marginTop: "20px",
    [theme.breakpoints.up("md")]: {
      marginTop: "30px",
      padding: "0 20px",
    },
  },
  title: {
    marginBottom: "10px",
  },
  agreeBtn: {
    float: "right",
    width: "120px",
  },
}));

export default useStyles;
