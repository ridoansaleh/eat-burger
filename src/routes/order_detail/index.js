import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Breadcrumbs,
  Link,
  Paper,
  Button,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import {
  RestaurantMenu as RestaurantMenuIcon,
  Motorcycle as MotorcycleIcon,
  Payment as PaymentIcon,
  NavigateNext as NavigateNextIcon,
} from "@material-ui/icons";
import useStyles from "./_orderDetailStyle";
import { FirebaseContext } from "../../context";
import { STORAGE_ORDER_ID } from "../../constant/storage";
import { COLLECTION_ORDERS } from "../../constant/collection";

const threeBoxSkeleton = [1, 2, 3];

function OrderDetail() {
  const [orderDetail, setOrderDetail] = useState({
    fullname: "",
    address: "",
    phone_number: "",
    menus: [],
    total_price: "",
    time: "",
    status: "",
  });
  const [loading, setLoading] = useState(true);

  const classes = useStyles();
  const history = useHistory();
  const { db } = useContext(FirebaseContext);

  const handleOrderListClick = () => {
    history.goBack();
  };

  const getOrderDetails = (orderId) => {
    db.collection(COLLECTION_ORDERS)
      .doc(orderId)
      .get()
      .then((doc) => {
        let data = orderDetail;
        if (doc.exists) {
          data = doc.data();
        }
        setOrderDetail(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error getting order detail: ", error);
      });
  };

  useEffect(() => {
    const orderId = sessionStorage.getItem(STORAGE_ORDER_ID);
    if (orderId) {
      getOrderDetails(orderId);
    }
  }, []);

  const handleConfirmClick = () => {
    const orderId = sessionStorage.getItem(STORAGE_ORDER_ID);
    if (orderId) {
      db.collection(COLLECTION_ORDERS)
        .doc(orderId)
        .update({
          ...orderDetail,
          status: "completed",
        })
        .then(() => {
          console.log("Document successfully updated!");
          getOrderDetails(orderId);
        })
        .catch((error) => {
          console.error("Error updating document: ", error);
        });
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link color="inherit" onClick={handleOrderListClick}>
            Order List
          </Link>
          <Typography color="textPrimary">Detail</Typography>
        </Breadcrumbs>
        <div className={classes.orderInfo}>
          <div className={classes.infoItem}>
            Order Time :{" "}
            {loading ? (
              <Skeleton
                variant="rect"
                animation="wave"
                width="35%"
                className={classes.infoItemSkeleton}
              />
            ) : (
              <>
                {orderDetail.time.split(",")[0]},{" "}
                {orderDetail.time.split(",")[2]}{" "}
                {orderDetail.time.split(",")[1]}
              </>
            )}
          </div>
          <div className={classes.infoItem}>
            Status :{" "}
            {loading ? (
              <Skeleton
                variant="rect"
                animation="wave"
                width="20%"
                className={classes.infoItemSkeleton}
              />
            ) : (
              <>{orderDetail.status}</>
            )}
          </div>
        </div>
        <Accordion square expanded className={classes.accordion}>
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            className={classes.accordionSummary}
          >
            <RestaurantMenuIcon />
            <Typography className={classes.accordionTitle}>Menu</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Table size="small" aria-label="a dense table">
              <TableBody>
                {loading ? (
                  threeBoxSkeleton.map((d) => (
                    <TableRow key={d}>
                      <Skeleton
                        variant="rect"
                        animation="wave"
                        classes={{ root: classes.data }}
                      />
                    </TableRow>
                  ))
                ) : (
                  <>
                    {orderDetail.menus.map((d) => (
                      <TableRow key={d.name}>
                        <TableCell component="th" scope="row">
                          {d.name}
                        </TableCell>
                        <TableCell align="right">{d.count}</TableCell>
                        <TableCell align="right">$ {d.total_price}</TableCell>
                      </TableRow>
                    ))}
                  </>
                )}
              </TableBody>
            </Table>
          </AccordionDetails>
        </Accordion>
        <Accordion square expanded className={classes.accordion}>
          <AccordionSummary
            aria-controls="panel2d-content"
            id="panel2d-header"
            className={classes.accordionSummary}
          >
            <MotorcycleIcon />
            <Typography className={classes.accordionTitle}>
              Delivery Info
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Table size="small" aria-label="a dense table">
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Name
                  </TableCell>
                  <TableCell align="right">
                    {loading ? (
                      <Skeleton variant="rect" animation="wave" />
                    ) : (
                      orderDetail.fullname
                    )}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Address
                  </TableCell>
                  <TableCell align="right">
                    {loading ? (
                      <Skeleton variant="rect" animation="wave" />
                    ) : (
                      orderDetail.address
                    )}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Phone
                  </TableCell>
                  <TableCell align="right">
                    {loading ? (
                      <Skeleton variant="rect" animation="wave" />
                    ) : (
                      orderDetail.phone_number
                    )}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </AccordionDetails>
        </Accordion>
        <Accordion square expanded className={classes.accordion}>
          <AccordionSummary
            aria-controls="panel3d-content"
            id="panel3d-header"
            className={classes.accordionSummary}
          >
            <PaymentIcon />
            <Typography className={classes.accordionTitle}>Payment</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Table size="small" aria-label="a dense table">
              <TableBody>
                <TableRow>
                  <TableCell scope="row">Total</TableCell>
                  <TableCell align="right">
                    {loading ? (
                      <Skeleton variant="rect" animation="wave" />
                    ) : (
                      <>$ {orderDetail.total_price}</>
                    )}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </AccordionDetails>
        </Accordion>
        {orderDetail.status === "process" && (
          <Paper elevation={1} className={classes.paper}>
            <Typography variant="h6" component="h6">
              Have your order arrived?
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.confirmBtn}
              onClick={handleConfirmClick}
            >
              Confirm
            </Button>
          </Paper>
        )}
      </div>
    </div>
  );
}

export default OrderDetail;
