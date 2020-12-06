import React, { useState, useEffect, useContext } from "react";
import { Paper, TextField, TextareaAutosize } from "@material-ui/core";
import useStyles from "../_orderStyle";
import { FirebaseContext } from "../../../database";
import { STORAGE_ORDER_CREATOR } from "../../../constant/storage";

function Step2(props) {
  const [fullname, setFullname] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const classes = useStyles();

  const { db, auth } = useContext(FirebaseContext);

  useEffect(() => {
    let orderCreator = sessionStorage.getItem(STORAGE_ORDER_CREATOR);
    orderCreator = orderCreator ? JSON.parse(orderCreator) : null;
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("users")
          .where("email", "==", user.email)
          .get()
          .then((querySnapshot) => {
            let data = null;
            querySnapshot.forEach((doc) => {
              data = doc.data();
            });
            if (orderCreator) {
              setFullname(orderCreator.fullname);
              setAddress(orderCreator.address);
              setPhoneNumber(orderCreator.phone_number);
            } else {
              setFullname(data.fullname);
              setAddress(data.address);
              setPhoneNumber(data.phone_number);
              sessionStorage.setItem(
                STORAGE_ORDER_CREATOR,
                JSON.stringify({
                  fullname: data.fullname,
                  address: data.address,
                  phone_number: data.phone_number,
                })
              );
            }
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else {
        console.log("Is not login");
      }
    });
  }, []);

  useEffect(() => {
    if (fullname && address && phoneNumber) {
      props.onSetDisableNextBtn(false);
    } else {
      props.onSetDisableNextBtn(true);
    }
    sessionStorage.setItem(
      STORAGE_ORDER_CREATOR,
      JSON.stringify({
        fullname: fullname,
        address: address,
        phone_number: phoneNumber,
      })
    );
  }, [fullname, address, phoneNumber]);

  return (
    <Paper classes={{ root: classes.deliveryWrapper }}>
      <form noValidate autoComplete="off" className={classes.deliveryForm}>
        <TextField
          label={!fullname && "Full Name"}
          variant="outlined"
          size="small"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        <TextareaAutosize
          aria-label="address"
          rowsMin={5}
          placeholder="Address"
          className={classes.address}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextField
          label={!phoneNumber && "Phone Number"}
          variant="outlined"
          size="small"
          type="number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </form>
    </Paper>
  );
}

export default Step2;
