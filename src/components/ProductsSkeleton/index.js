import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import useStyles from "./_productsSkeletonStyle";

const sixBoxSkeleton = [1, 2, 3, 4, 5, 6];

function ProductsSkeleton() {
  const classes = useStyles();

  return (
    <>
      {sixBoxSkeleton.map((data) => (
        <Card className={classes.menuItem} key={data}>
          <CardActionArea>
            <Skeleton
              variant="rect"
              animation="wave"
              classes={{ root: classes.media }}
            />
            <CardContent>
              <Typography gutterBottom variant="h6">
                <Skeleton animation="wave" />
              </Typography>
              <Grid container direction="row" justify="space-between">
                <Skeleton animation="wave" width="30%" height="20px">
                  <Typography gutterBottom component="h5"></Typography>
                </Skeleton>
                <Skeleton animation="wave" width="30%" height="20px">
                  <Typography gutterBottom component="h5"></Typography>
                </Skeleton>
              </Grid>
              <Skeleton variant="rect" animation="wave" />
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
}

export default ProductsSkeleton;
