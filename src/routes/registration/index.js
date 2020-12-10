import "date-fns";
import React, { useState, useEffect, useContext } from "react";
import clsx from "clsx";
import {
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  TextareaAutosize,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DialogSuccess from "./DialogSuccess";
import useStyles from "./_registrationStyle";
import { FirebaseContext, UserContext } from "../../context";
import validateForm from "./validation";

const changeBorderColor = (color) => {
  let birthdateField = document.getElementsByClassName(
    "MuiOutlinedInput-notchedOutline"
  );
  birthdateField = birthdateField.length > 3 ? birthdateField[2] : null;
  if (birthdateField) {
    birthdateField.style.borderColor = color;
  }
};

function Registration() {
  const [fullname, setFullname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState(null);
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const classes = useStyles();

  const { db, auth, signUp } = useContext(FirebaseContext);
  const { isLogin } = useContext(UserContext);

  useEffect(() => {
    if (isFormSubmitted && !birthdate) {
      changeBorderColor("red");
    } else {
      changeBorderColor("rgba(0, 0, 0, 0.23)");
    }
  }, [isFormSubmitted, birthdate]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm(
      fullname,
      phoneNumber,
      gender,
      birthdate,
      address,
      email,
      password,
      retypePassword
    );
    setFormSubmitted(true);
    if (isValid) {
      signUp(email, password)
        .then(() => {
          if (isLogin) {
            console.log("User is signed in");
            // send email verification
            auth.currentUser
              .sendEmailVerification()
              .then(() => {
                console.log("Email sent");
              })
              .catch((error) => {
                console.log("An error happened while send email: ", error);
              });
            // add user to database
            db.collection("users")
              .add({
                fullname,
                phone_number: phoneNumber,
                gender,
                birthdate,
                address,
                email,
              })
              .then(() => {
                setFullname("");
                setPhoneNumber("");
                setGender("");
                setBirthdate(null);
                setAddress("");
                setEmail("");
                setPassword("");
                setRetypePassword("");
                setFormSubmitted(false);
                setDialogOpen(true);
              })
              .catch((error) => {
                console.error("Error adding document: ", error);
              });
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className={classes.container}>
      <div>
        <h1 className={classes.title}>Registration</h1>
        <form
          noValidate
          autoComplete="off"
          className={classes.boxForm}
          onSubmit={handleFormSubmit}
        >
          <TextField
            label="Full Name"
            variant="outlined"
            size="small"
            className={classes.field}
            error={isFormSubmitted && !/^[A-Za-z\s]+$/.test(fullname)}
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            type="number"
            size="small"
            className={classes.field}
            error={isFormSubmitted && phoneNumber.length < 8}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <FormControl component="fieldset" className={classes.field}>
            <RadioGroup
              aria-label="gender"
              name="gender"
              className={classes.gender}
              error={isFormSubmitted && !gender}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <FormControlLabel
                value="male"
                control={
                  <Radio
                    classes={{
                      root: clsx({
                        [classes.errorGender]: isFormSubmitted && !gender,
                      }),
                    }}
                  />
                }
                label="Male"
              />
              <FormControlLabel
                value="female"
                control={
                  <Radio
                    classes={{
                      root: clsx({
                        [classes.errorGender]: isFormSubmitted && !gender,
                      }),
                    }}
                  />
                }
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
              value={birthdate}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              className={classes.field}
              onChange={(date) => setBirthdate(date)}
            />
          </MuiPickersUtilsProvider>
          <TextareaAutosize
            aria-label="address"
            rowsMin={5}
            placeholder="Address"
            className={clsx(classes.address, {
              [classes.errorAddress]: isFormSubmitted && address.length < 10,
            })}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            size="small"
            className={classes.field}
            error={isFormSubmitted && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            size="small"
            className={classes.field}
            error={isFormSubmitted && password.length < 8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Re-enter Password"
            type="password"
            variant="outlined"
            size="small"
            className={classes.field}
            error={
              isFormSubmitted &&
              password.length >= 8 &&
              retypePassword !== password
            }
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className={classes.registerBtn}
          >
            Register
          </Button>
        </form>
      </div>
      <DialogSuccess
        isOpen={isDialogOpen}
        onDialogClose={() => setDialogOpen(false)}
      />
    </div>
  );
}

export default Registration;
