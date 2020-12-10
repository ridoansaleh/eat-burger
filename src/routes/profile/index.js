import React, { useState, useEffect, useContext } from "react";
import {
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { LocationOn as Location, Phone, AccessTime } from "@material-ui/icons";
import useStyles from "./_profileStyle";
import { FirebaseContext, UserContext } from "../../context";

function Profile() {
  const [userData, setUserData] = useState({
    avatarName: "",
    name: "",
    address: "",
    phoneNumber: "",
    lastimeLogin: "",
  });
  const [loading, setLoading] = useState(true);

  const classes = useStyles();
  const { db } = useContext(FirebaseContext);
  const { isLogin, email, lastSignInTime } = useContext(UserContext);

  const createAvatarName = (fullname) => {
    let arrName = fullname.split(" ");
    return arrName[0].charAt(0) + arrName[1].charAt(0);
  };

  useEffect(() => {
    if (isLogin) {
      db.collection("users")
        .where("email", "==", email)
        .get()
        .then((querySnapshot) => {
          let data = null;
          querySnapshot.forEach((doc) => {
            data = doc.data();
          });
          setUserData({
            avatarName: createAvatarName(data.fullname),
            name: data.fullname,
            address: data.address,
            phoneNumber: data.phone_number,
            lastimeLogin: lastSignInTime,
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
              <Location />
            </ListItemIcon>
            <ListItemText primary={renderText(userData.address)} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Phone />
            </ListItemIcon>
            <ListItemText primary={renderText(userData.phoneNumber)} />
          </ListItem>
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
