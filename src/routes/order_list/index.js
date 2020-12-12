import React, { useState, useEffect, useContext } from "react";
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
import { FirebaseContext, UserContext } from "../../context";
import { ORDER_DETAIL } from "../../constant/path";

function OrderList() {
  const [value, setValue] = useState(0);
  const [activeOrders, setActiveOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);

  const classes = useStyles();
  const history = useHistory();
  const { db } = useContext(FirebaseContext);
  const { isLogin, id } = useContext(UserContext);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const handleOrderClick = () => {
    history.push(ORDER_DETAIL);
  };

  useEffect(() => {
    if (isLogin) {
      db.collection("orders")
        .where("user_id", "==", id)
        .get()
        .then((querySnapshot) => {
          let data = [];
          querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
          });
          setActiveOrders(data.filter((d) => d.status === "process"));
          setCompletedOrders(data.filter((d) => d.status === "completed"));
        })
        .catch((error) => {
          console.log("Error getting order list: ", error);
        });
    }
  }, []);

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
            aria-label="simple tabs example"
            onChange={handleChange}
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
              {activeOrders.length > 0 ? (
                <>
                  {activeOrders.map((order) => (
                    <TableRow
                      key={order.id}
                      className={classes.tableRow}
                      onClick={handleOrderClick}
                    >
                      <TableCell component="th" scope="row">
                        {order.menus.map((d) => d.name).join(", ")}
                      </TableCell>
                      <TableCell align="right">$ {order.total_price}</TableCell>
                      <TableCell align="right">
                        {order.time.split(",")[2].trim()}
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              ) : (
                <Box p={3}>
                  <Typography>No Orders</Typography>
                </Box>
              )}
            </TableBody>
          </Table>
        </div>
        <div
          role="tabpanel"
          hidden={value !== 1}
          id={`simple-tabpanel-1`}
          aria-labelledby={`simple-tab-1`}
        >
          <Table aria-label="simple table" className={classes.table}>
            <TableBody>
              {completedOrders.length > 0 ? (
                <>
                  {completedOrders.map((order) => (
                    <TableRow
                      key={order.id}
                      className={classes.tableRow}
                      onClick={handleOrderClick}
                    >
                      <TableCell component="th" scope="row">
                        {order.menus.map((d) => d.name).join(", ")}
                      </TableCell>
                      <TableCell align="right">$ {order.total_price}</TableCell>
                      <TableCell align="right">
                        {order.time.split(",")[2].trim()}
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              ) : (
                <Box p={3}>
                  <Typography>No Orders</Typography>
                </Box>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default OrderList;
