import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  TextField,
  Button,
  Snackbar,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import useStyles from "./_loginStyle";
import { FirebaseContext } from "../../context";
import { HOME_PATH, REGISTRATION_PATH } from "../../constant/path";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [isPasswordResetSucceedOpen, setPasswordResetSucceedOpen] = useState(false);
  const [isPasswordResetFailedOpen, setPasswordResetFailedOpen] = useState(false);
  const [isAlertOpen, setAlertOpen] = useState(false);
  const [isWarningOpen, setWarningOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const classes = useStyles();
  const history = useHistory();

  const { auth, signIn } = useContext(FirebaseContext);

  const handleRegistrationClick = () => {
    history.push(REGISTRATION_PATH);
  };

  const handleForgotPasswordClick = () => {
    if (!email) {
      alert("Email is required");
      return;
    }
    auth.sendPasswordResetEmail(email)
      .then(() => {
        setPasswordResetSucceedOpen(true);
      })
      .catch((error) => {
        console.log("Failed to send password reset email: " + error);
        setPasswordResetFailedOpen(true);
      });
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (email && password) {
      setLoading(true);
      signIn(email, password)
        .then(({ user }) => {
          if (user.emailVerified) {
            history.replace(HOME_PATH);
          } else {
            setLoading(false);
            setWarningOpen(true);
          }
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          setAlertOpen(true);
        });
    }
  };

  return (
    <div className={classes.container}>
      <div>
        <h1>Welcome to Eat Burger</h1>
        <p>Please write down your email &amp; password</p>
        <form
          noValidate
          autoComplete="off"
          className={classes.boxForm}
          onSubmit={handleFormSubmit}
        >
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            size="small"
            error={isFormSubmitted && !email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            size="small"
            error={isFormSubmitted && !password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={classes.forgotPasswordWrapper}>
            <span
              className={classes.forgotPasswordLink}
              onClick={handleForgotPasswordClick}
            >
              Forgot password?
            </span>
          </div>
          <Button type="submit" variant="contained" color="secondary">
            Login
          </Button>
        </form>
        <div className={classes.registrationBox}>
          Doesn't have account yet ? Register{" "}
          <span
            className={classes.registrationLink}
            onClick={handleRegistrationClick}
          >
            here
          </span>
        </div>
      </div>
      <Snackbar
        open={isPasswordResetSucceedOpen}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={6000}
        onClose={() => setPasswordResetSucceedOpen(false)}
      >
        <Alert onClose={() => setPasswordResetSucceedOpen(false)} severity="success">
          Password reset email sent. Please check your inbox!
        </Alert>
      </Snackbar>
      <Snackbar
        open={isPasswordResetFailedOpen}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={5000}
        onClose={() => setPasswordResetFailedOpen(false)}
      >
        <Alert onClose={() => setPasswordResetFailedOpen(false)} severity="error">
          Failed to send password reset email
        </Alert>
      </Snackbar>
      <Snackbar
        open={isAlertOpen}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={5000}
        onClose={() => setAlertOpen(false)}
      >
        <Alert onClose={() => setAlertOpen(false)} severity="error">
          Your email or password are incorrect!
        </Alert>
      </Snackbar>
      <Snackbar
        open={isWarningOpen}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={6000}
        onClose={() => setWarningOpen(false)}
      >
        <Alert onClose={() => setWarningOpen(false)} severity="warning">
          Your email is not verified yet. Please verify and login again!
        </Alert>
      </Snackbar>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default Login;
