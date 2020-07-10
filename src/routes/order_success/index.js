import React from "react";
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
import {
  CheckCircle as CheckCircleIcon,
  RestaurantMenu as RestaurantMenuIcon,
  Motorcycle as MotorcycleIcon,
  Payment as PaymentIcon,
} from "@material-ui/icons";
import useStyles from "./_orderSuccessStyle";

function OrderSuccess(props) {
  const classes = useStyles();
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
