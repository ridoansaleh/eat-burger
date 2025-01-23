import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import LazyLoad from "react-lazyload";
import useStyles from "./_productStyle";

function Product({
  item,
  displayCartBtn,
  handleOrderClick,
  handleAddToCartClick,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.menuItem}>
      <CardActionArea component="div">
        <LazyLoad height={300}>
          <CardMedia
            className={classes.media}
            image={item.image}
            title={item.name}
            alt={item.credit}
          />
        </LazyLoad>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h6" className={classes.productName}>
            {item.name}
          </Typography>
          <Grid container direction="row" justify="space-between">
            <Typography gutterBottom component="h5" className={classes.price}>
              Price
            </Typography>
            <Typography gutterBottom component="h5" className={classes.price}>
              ${item.price}
            </Typography>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={() => handleOrderClick(item)}
          >
            Order
          </Button>
          {displayCartBtn && (
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              className={classes.addCartBtn}
              onClick={handleAddToCartClick}
            >
              Add to Cart
            </Button>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

Product.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    credit: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
  displayCartBtn: PropTypes.bool,
  handleOrderClick: PropTypes.func,
  handleAddToCartClick: PropTypes.func,
};

Product.defaultProps = {
  item: {
    image: "",
    title: "",
    credit: "",
    name: "",
    price: 0,
  },
  displayCartBtn: false,
  handleOrderClick: () => null,
  handleAddToCartClick: () => null,
};

export default Product;
