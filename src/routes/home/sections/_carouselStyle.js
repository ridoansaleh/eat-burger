import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  slider: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "600px",
  },
  banner: {
    height: "250px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      height: "400px",
    },
    [theme.breakpoints.up("md")]: {
      height: "600px",
    },
  },
}));

export default useStyles;
