import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menus: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  menusTitle: {
    textAlign: "center",
    fontSize: "34px",
    textTransform: "uppercase",
  },
  list: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    maxWidth: "1000px",
  },
  media: {
    height: "300px",
  },
  menuItem: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "250px",
    },
    margin: "10px",
  },
}));

export default useStyles;
