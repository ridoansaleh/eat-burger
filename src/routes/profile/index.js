import React, { useState, useEffect, useContext } from "react";
import {
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  TextField,
  Button,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import {
  Email as EmailIcon,
  LocationOn as Location,
  Phone,
  AccessTime,
} from "@material-ui/icons";
import { isValidPhoneNumber } from "react-phone-number-input";
import { format } from "date-fns";
import PhoneNumber from "../../components/PhoneNumber";
import useStyles from "./_profileStyle";
import { FirebaseContext, UserContext } from "../../context";
import { COLLECTION_USERS } from "../../constant/collection";

function Profile() {
  const [userData, setUserData] = useState({
    avatarName: "",
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
    lastimeLogin: "",
  });
  const [loading, setLoading] = useState(true);
  const [isAddressFormSubmitted, setAddressFormSubmitted] = useState(false);
  const [isPhoneFormSubmitted, setPhoneFormSubmitted] = useState(false);
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showAddAddress, setShowAddAddress] = useState(true);
  const [showAddPhone, setShowAddPhone] = useState(true);
  const [userDocId, setUserDocId] = useState("");
  const [isPhoneNumberValid, setPhoneNumberValid] = useState(true);

  const classes = useStyles();
  const { db } = useContext(FirebaseContext);
  const { isLogin, email, lastSignInTime } = useContext(UserContext);

  const createAvatarName = (fullname) => {
    let arrName = fullname.split(" ");
    let firstLetter = arrName[0].charAt(0);
    let secondLetter = arrName[1] ? arrName[1].charAt(0) : arrName[0].charAt(1);
    let result = firstLetter + secondLetter;
    return result.toUpperCase();
  };

  useEffect(() => {
    if (isLogin) {
      db.collection(COLLECTION_USERS)
        .where("email", "==", email)
        .get()
        .then((querySnapshot) => {
          let data = null;
          let docId = null;
          querySnapshot.forEach((doc) => {
            data = doc.data();
            docId = doc.id;
          });
          setUserDocId(docId);
          setUserData({
            avatarName: createAvatarName(data.fullname),
            name: data.fullname,
            email: data.email,
            address: data.address,
            phoneNumber: data.phone_number,
            lastimeLogin: format(
              new Date(lastSignInTime),
              "EEEE, MMMM do yyyy hh:mm:ss a"
            ),
          });
          setLoading(false);
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    }
  }, []);

  const renderText = (text) => {
    return loading ? (
      <Skeleton
        variant="rect"
        animation="wave"
        classes={{ root: classes.textSkeleton }}
      />
    ) : (
      <>{text}</>
    );
  };

  const handleEditAddress = (e) => {
    e.preventDefault();
    if (isAddressFormSubmitted) return;
    setAddressFormSubmitted(true);
    if (!address) return;
    db.collection(COLLECTION_USERS)
      .doc(userDocId)
      .update({ address })
      .then(() => {
        setUserData({ ...userData, address });
        setAddress("");
        setShowAddAddress(true);
      })
      .catch((error) => {
        alert("Error updating user's address: ", error);
      })
      .finally(() => {
        setAddressFormSubmitted(false);
      });
  };

  const handleEditPhoneNumber = (e) => {
    e.preventDefault();
    if (!phoneNumber || isPhoneFormSubmitted) return;
    setPhoneFormSubmitted(true);
    if (!isPhoneNumberValid) {
      setPhoneFormSubmitted(false);
      return;
    }
    db.collection(COLLECTION_USERS)
      .doc(userDocId)
      .update({ phone_number: phoneNumber })
      .then(() => {
        setUserData({ ...userData, phoneNumber });
        setPhoneNumber("");
        setShowAddPhone(true);
      })
      .catch((error) => {
        alert("Error updating user's phone number: ", error);
      })
      .finally(() => {
        setPhoneFormSubmitted(false);
      });
  };

  const handlePhoneNumberChange = (value) => {
    const isValid = isValidPhoneNumber(value || "");
    setPhoneNumberValid(isValid);
    setPhoneNumber(value);
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.profileHead}>
          <Avatar className={classes.avatar}>{userData.avatarName}</Avatar>
          <Typography className={classes.name}>
            {renderText(userData.name)}
          </Typography>
        </div>
        <List component="nav" aria-label="user detail">
          <ListItem button>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary={renderText(userData.email)} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Location />
            </ListItemIcon>
            {userData.address ? (
              <ListItemText primary={renderText(userData.address)} />
            ) : showAddAddress ? (
              <Button color="primary" onClick={() => setShowAddAddress(false)}>
                Add your address
              </Button>
            ) : (
              <form
                noValidate
                autoComplete="off"
                className={classes.editForm}
                onSubmit={handleEditAddress}
              >
                <TextField
                  label="Address"
                  type="text"
                  variant="outlined"
                  size="small"
                  className={classes.formInput}
                  error={isAddressFormSubmitted && !address}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <Button type="submit" variant="outlined" color="secondary">
                  Save
                </Button>
              </form>
            )}
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Phone />
            </ListItemIcon>
            {userData.phoneNumber ? (
              <ListItemText primary={renderText(userData.phoneNumber)} />
            ) : showAddPhone ? (
              <Button color="primary" onClick={() => setShowAddPhone(false)}>
                Add your phone number
              </Button>
            ) : (
              <form
                noValidate
                autoComplete="off"
                className={classes.editForm}
                onSubmit={handleEditPhoneNumber}
              >
                <PhoneNumber
                  className={classes.formInput}
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
                <Button type="submit" variant="outlined" color="secondary">
                  Save
                </Button>
              </form>
            )}
          </ListItem>
          {!isPhoneNumberValid && (
            <ListItem className={classes.phoneInvalidWrapper}>
              <ListItemIcon />
              <ListItemText
                className={classes.phoneInvalid}
                primary="Phone number is invalid"
              />
            </ListItem>
          )}
        </List>
        <Divider />
        <List component="nav" aria-label="last login">
          <ListItem button>
            <ListItemIcon>
              <AccessTime />
            </ListItemIcon>
            <ListItemText primary={renderText(userData.lastimeLogin)} />
          </ListItem>
        </List>
      </div>
    </div>
  );
}

export default Profile;
