import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    minHeight: "calc(100vh - 318px)",
    padding: "20px 10px",
    [theme.breakpoints.up("md")]: {
      padding: 0,
      paddingTop: "40px",
    },
  },
  wrapper: {
    width: "100%",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      width: "800px",
    },
  },
  avatar: {
    backgroundColor: "#71A1E1",
    width: "96px",
    height: "96px",
    marginBottom: "20px",
    fontSize: "25px",
  },
  name: {
    marginBottom: "30px",
  },
}));

export default useStyles;
