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
  successIcon: {
    fontSize: "80px",
    marginLeft: "calc((100% - 80px) / 2)",
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
  notes: {
    fontSize: "13px",
  },
}));

export default useStyles;
