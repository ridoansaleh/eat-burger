import React from "react";
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
} from "@material-ui/core";
import {
  RestaurantMenu as RestaurantMenuIcon,
  Motorcycle as MotorcycleIcon,
  Payment as PaymentIcon,
  NavigateNext as NavigateNextIcon,
} from "@material-ui/icons";
import useStyles from "./_orderDetailStyle";

function OrderDetail(props) {
  const classes = useStyles();
  const history = useHistory();

  const handleOrderListClick = () => {
    history.goBack();
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
        <ul className={classes.orderInfo}>
          <li>Order Time : Monday, 12 July 2020 14.00</li>
          <li>Status : Process</li>
        </ul>
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
                <TableRow>
                  <TableCell component="th" scope="row">
                    Frozen yoghurt
                  </TableCell>
                  <TableCell align="right">1</TableCell>
                  <TableCell align="right">$ 6</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Ice cream sandwich
                  </TableCell>
                  <TableCell align="right">1</TableCell>
                  <TableCell align="right">$ 9</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Eclair
                  </TableCell>
                  <TableCell align="right">1</TableCell>
                  <TableCell align="right">$ 16</TableCell>
                </TableRow>
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
                  <TableCell align="right">Ridoan Saleh Nasution</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Address
                  </TableCell>
                  <TableCell align="right">Kabil, Batam</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Phone
                  </TableCell>
                  <TableCell align="right">081211002211</TableCell>
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
                  <TableCell align="right">$ 31</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default OrderDetail;
