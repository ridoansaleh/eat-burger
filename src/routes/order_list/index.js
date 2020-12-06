import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Tabs,
  Tab,
  Box,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import useStyles from "./_orderListStyle";
import { ORDER_DETAIL } from "../../constant/path";

function OrderList(props) {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const history = useHistory();

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const handleOrderClick = () => {
    history.push(ORDER_DETAIL);
  };

  const a11yProps = (index) => ({
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  });

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Active Orders" {...a11yProps(0)} />
            <Tab label="Completed Orders" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <div
          role="tabpanel"
          hidden={value !== 0}
          id={`simple-tabpanel-0`}
          aria-labelledby={`simple-tab-0`}
        >
          <Table aria-label="simple table" className={classes.table}>
            <TableBody>
              <TableRow className={classes.tableRow} onClick={handleOrderClick}>
                <TableCell component="th" scope="row">
                  Frozen yoghurt, Ice cream sandwich, Eclair etc
                </TableCell>
                <TableCell align="right">$ 30</TableCell>
                <TableCell align="right">12 June 2020</TableCell>
              </TableRow>
              <TableRow className={classes.tableRow} onClick={handleOrderClick}>
                <TableCell component="th" scope="row">
                  Cupcake, Ice cream sandwich, Eclair etc
                </TableCell>
                <TableCell align="right">$ 40</TableCell>
                <TableCell align="right">7 May 2020</TableCell>
              </TableRow>
              <TableRow className={classes.tableRow} onClick={handleOrderClick}>
                <TableCell component="th" scope="row">
                  Gingerbread, Cupcake, Eclair etc
                </TableCell>
                <TableCell align="right">$ 39</TableCell>
                <TableCell align="right">9 May 2020</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div
          role="tabpanel"
          hidden={value !== 1}
          id={`simple-tabpanel-1`}
          aria-labelledby={`simple-tab-1`}
        >
          <Box p={3}>
            <Typography>No Orders</Typography>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default OrderList;
