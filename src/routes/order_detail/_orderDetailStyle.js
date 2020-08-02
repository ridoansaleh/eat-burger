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
  orderInfo: {
    listStyleType: "none",
    padding: "0",
    margin: "20px 0",
    [theme.breakpoints.up("md")]: {
      margin: "40px 0 20px",
    },
  },
  accordion: {
    boxShadow: "none",
  },
  accordionTitle: {
    marginLeft: "10px",
  },
  accordionSummary: {
    backgroundColor: "#D5D8DC",
    border: "1px solid rgba(0, 0, 0, .125)",
  },
}));

export default useStyles;
