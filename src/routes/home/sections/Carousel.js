import React from "react";
import { Paper, Button } from "@material-ui/core";
import Slider from "react-material-ui-carousel";
import useStyles from "./_carouselStyle";

const items = [
  {
    name: "Burger A #1",
    description: "The best ever Burger that cooked in this city",
  },
  {
    name: "Burger B #2",
    description: "Your favorite Burger while hungout with friends",
  },
];

function Carousel() {
  const classes = useStyles();

  return (
    <Slider navButtonsAlwaysVisible animation="slide" autoPlay={false}>
      {items.map((item, index) => (
        <Paper variant="outlined" square key={index} className={classes.slider}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>

          <Button variant="contained" color="primary">
            Check it out!
          </Button>
        </Paper>
      ))}
    </Slider>
  );
}

export default Carousel;
