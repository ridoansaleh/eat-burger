import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    minHeight: "calc(100vh - 318px)",
    paddingTop: "30px",
    [theme.breakpoints.up("md")]: {
      paddingTop: "70px",
    },
  },
  wrapper: {
    padding: "0 10px",
    [theme.breakpoints.up("md")]: {
      width: "800px",
      padding: "0",
    },
  },
  table: {
    marginTop: "15px",
  },
  tableRow: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#D5D8DC",
    },
  },
}));

export default useStyles;
