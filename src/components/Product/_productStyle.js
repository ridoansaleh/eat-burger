import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menuItem: {
    width: "43%",
    margin: "10px",
    [theme.breakpoints.up("sm")]: {
      width: "250px",
    },
  },
  media: {
    height: "200px",
    [theme.breakpoints.up("sm")]: {
      height: "300px",
    },
  },
  cardContent: {
    [theme.breakpoints.down("sm")]: {
      padding: "5px 5px 10px",
    },
  },
  productName: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    [theme.breakpoints.down("sm")]: {
      fontSize: "17px",
    },
  },
  price: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
    },
  },
  addCartBtn: {
    marginTop: "7px",
  },
}));

export default useStyles;
