import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menuItem: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "250px",
    },
    margin: "10px",
  },
  media: {
    height: "300px",
  },
  addCartBtn: {
    marginTop: "7px",
  },
}));

export default useStyles;
