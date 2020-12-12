import React, { useState, useEffect, useContext } from "react";
import Slider from "react-material-ui-carousel";
import { Skeleton } from "@material-ui/lab";
import useStyles from "./_carouselStyle";
import { FirebaseContext } from "../../../context";
import { COLLECTION_BANNERS } from "../../../constant/collection";

function Carousel() {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  const classes = useStyles();

  const { db } = useContext(FirebaseContext);

  useEffect(() => {
    db.collection(COLLECTION_BANNERS)
      .get()
      .then((querySnapshot) => {
        let data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setBanners(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Slider navButtonsAlwaysVisible animation="slide" autoPlay={true}>
          <Skeleton
            variant="rect"
            animation="wave"
            classes={{ root: classes.banner }}
          />
        </Slider>
      ) : (
        <Slider navButtonsAlwaysVisible animation="slide" autoPlay={true}>
          {banners.map((item) => (
            <img
              key={item.id}
              className={classes.banner}
              src={item.url}
              alt={item.credit}
            />
          ))}
        </Slider>
      )}
    </>
  );
}

export default Carousel;
