import "date-fns";
import React, { useState } from "react";
import {
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import useStyles from "./_registrationStyle";

function Registration() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [gender, setGender] = useState("male");
  const classes = useStyles();

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={classes.container}>
      <div>
        <h1 className={classes.title}>Registration</h1>
        <form noValidate autoComplete="off" className={classes.boxForm}>
          <TextField label="Full Name" variant="outlined" size="small" />
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            size="small"
          />
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={gender}
              className={classes.gender}
              onChange={handleGenderChange}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              size="small"
              inputVariant="outlined"
              label="Birth Date"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
          <TextField label="Username" variant="outlined" size="small" />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            size="small"
          />
          <Button variant="contained" color="secondary">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
