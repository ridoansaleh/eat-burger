import React from "react";
import {
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { LocationOn as Location, Phone, AccessTime } from "@material-ui/icons";
import useStyles from "./_profileStyle";

function Profile(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Avatar className={classes.avatar}>RS</Avatar>
        <Typography className={classes.name}>Ridoan Saleh Nasution</Typography>
        <List component="nav" aria-label="user detail">
          <ListItem button>
            <ListItemIcon>
              <Location />
            </ListItemIcon>
            <ListItemText primary="Jalan Hang Kesturi No. 1 Kabil, Batam" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Phone />
            </ListItemIcon>
            <ListItemText primary="081211002211" />
          </ListItem>
        </List>
        <Divider />
        <List component="nav" aria-label="last login">
          <ListItem button>
            <ListItemIcon>
              <AccessTime />
            </ListItemIcon>
            <ListItemText primary="Saturday, 11 March 2020 09.45" />
          </ListItem>
        </List>
      </div>
    </div>
  );
}

export default Profile;
