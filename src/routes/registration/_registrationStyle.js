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
  title: {
    textAlign: "center",
  },
  boxForm: {
    height: "520px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  gender: {
    flexDirection: "row",
  },
  address: {
    padding: "15px",
    fontSize: "18px",
  },
}));

export default useStyles;
