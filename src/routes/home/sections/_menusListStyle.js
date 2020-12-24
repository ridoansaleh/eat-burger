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
    width: "100%",
    maxWidth: "1000px",
  },
}));

export default useStyles;
