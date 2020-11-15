import React from "react";
import Slider from "react-material-ui-carousel";
import useStyles from "./_carouselStyle";
import banner1 from "../assets/4121849_cropped.jpg";
import banner2 from "../assets/4344187_cropped.jpg";
import banner3 from "../assets/4587917_cropped.jpg";

const items = [
  {
    banner: banner1,
    credit: "Banner vector created by freepik - www.freepik.com",
  },
  {
    banner: banner2,
    credit: "Banner vector created by freepik - www.freepik.com",
  },
  {
    banner: banner3,
    credit: "Banner psd created by freepik - www.freepik.com",
  },
];

function Carousel() {
  const classes = useStyles();

  return (
    <Slider navButtonsAlwaysVisible animation="slide" autoPlay={false}>
      {items.map((item, index) => (
        <img
          key={index}
          className={classes.banner}
          src={item.banner}
          alt={item.credit}
        />
      ))}
    </Slider>
  );
}

export default Carousel;
