import React, { useState, useEffect, useContext } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import {
  CheckCircle as CheckCircleIcon,
  RestaurantMenu as RestaurantMenuIcon,
  Motorcycle as MotorcycleIcon,
  Payment as PaymentIcon,
} from "@material-ui/icons";
import useStyles from "./_orderSuccessStyle";
import { FirebaseContext } from "../../database";
import { STORAGE_ORDER_ID } from "../../constant/storage";

const threeBoxSkeleton = [1, 2, 3];

function OrderSuccess() {
  const [orderDetail, setOrderDetail] = useState({
    fullname: "",
    address: "",
    phone_number: "",
    menus: [],
    total_price: "",
  });
  const [loading, setLoading] = useState(true);

  const classes = useStyles();

  const { db } = useContext(FirebaseContext);

  useEffect(() => {
    const orderId = sessionStorage.getItem(STORAGE_ORDER_ID);
    db.collection("orders")
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
        console.log("Error getting documents: ", error);
      });
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <CheckCircleIcon color="primary" className={classes.successIcon} />
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
        <div className={classes.notes}>
          Notes:
          <ul>
            <li>You can't cancel this order in anynway</li>
            <li>
              You can't order a new menu until your previous order has been
              completed
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;
