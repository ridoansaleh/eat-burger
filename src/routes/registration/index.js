import "date-fns";
import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  TextField,
  Button,
  Link,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from "@material-ui/icons";
import DialogSuccess from "./dialog/DialogSuccess";
import DialogFailed from "./dialog/DialogFailed";
import useStyles from "./_registrationStyle";
import { FirebaseContext } from "../../context";
import { LOGIN_PATH } from "../../constant/path";
import { COLLECTION_USERS } from "../../constant/collection";
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
  const [isDialogSuccessOpen, setDialogSuccessOpen] = useState(false);
  const [isDialogFailedOpen, setDialogFailedOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const classes = useStyles();
  const history = useHistory();

  const { db, auth, signUp } = useContext(FirebaseContext);

  useEffect(() => {
    if (isFormSubmitted && !birthdate) {
      changeBorderColor("red");
    } else {
      changeBorderColor("rgba(0, 0, 0, 0.23)");
    }
  }, [isFormSubmitted, birthdate]);

  const redirectToLogin = () => {
    history.push(LOGIN_PATH);
  };

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
        .then(async ({ user }) => {
          // Update the display name
          await user.updateProfile({
            displayName: fullname,
          });
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
          db.collection(COLLECTION_USERS)
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
              setDialogSuccessOpen(true);
            })
            .catch((error) => {
              console.error("Error adding document: ", error);
            });
        })
        .catch((error) => {
          console.log(error);
          if (error.code === "auth/email-already-in-use") {
            setDialogFailedOpen(true);
          }
        });
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
            type={showPassword ? "text" : "password"}
            variant="outlined"
            size="small"
            className={classes.field}
            error={isFormSubmitted && password.length < 8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Confirm Password"
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
          <div className={classes.hasAccount}>
            Already have an account?{" "}
            <Link onClick={redirectToLogin}>Log in</Link>
          </div>
        </form>
      </div>
      <DialogSuccess
        isOpen={isDialogSuccessOpen}
        onDialogClose={() => setDialogSuccessOpen(false)}
      />
      <DialogFailed
        isOpen={isDialogFailedOpen}
        onDialogClose={() => setDialogFailedOpen(false)}
      />
    </div>
  );
}

export default Registration;
