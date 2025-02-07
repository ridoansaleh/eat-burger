import React, { useState, useEffect, useContext } from "react";
import { Paper, TextField, TextareaAutosize } from "@material-ui/core";
import useStyles from "../_orderStyle";
import { FirebaseContext, UserContext } from "../../../context";
import { STORAGE_ORDER_CREATOR } from "../../../constant/storage";
import { COLLECTION_USERS } from "../../../constant/collection";

function Step2(props) {
  const [fullname, setFullname] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const classes = useStyles();

  const { db } = useContext(FirebaseContext);
  const { email } = useContext(UserContext);

  useEffect(() => {
    let orderCreator = sessionStorage.getItem(STORAGE_ORDER_CREATOR);
    orderCreator = orderCreator ? JSON.parse(orderCreator) : null;
    db.collection(COLLECTION_USERS)
      .where("email", "==", email)
      .get()
      .then((querySnapshot) => {
        let data = null;
        querySnapshot.forEach((doc) => {
          data = doc.data();
        });
        setFullname(orderCreator.fullname || data.fullname);
        setAddress(orderCreator.address || data.address);
        setPhoneNumber(orderCreator.phone_number || data.phone_number);
        if (orderCreator === null) {
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
