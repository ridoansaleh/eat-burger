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
import useStyles from "./_productStyle";

function Product({
  id,
  item,
  displayCartBtn,
  handleOrderClick,
  handleAddToCartClick,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.menuItem} key={id}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.image}
          title={item.name}
          alt={item.credit}
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            {item.name}
          </Typography>
          <Grid container direction="row" justify="space-between">
            <Typography gutterBottom component="h5">
              Price
            </Typography>
            <Typography gutterBottom component="h5">
              ${item.price}
            </Typography>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => handleOrderClick(item)}
          >
            Order
          </Button>
          {displayCartBtn && (
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.addCartBtn}
              onClikc={handleAddToCartClick}
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
  id: PropTypes.string,
  item: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    credit: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
  }),
  displayCartBtn: PropTypes.bool,
  handleOrderClick: PropTypes.func,
  handleAddToCartClick: PropTypes.func,
};

Product.defaultProps = {
  id: "",
  item: {
    image: "",
    title: "",
    credit: "",
    name: "",
    price: "",
  },
  displayCartBtn: false,
  handleOrderClick: () => null,
  handleAddToCartClick: () => null,
};

export default Product;
