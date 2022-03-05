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
import { FirebaseContext, UserContext } from "../../context";
import { HOME_PATH, REGISTRATION_PATH } from "../../constant/path";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [isAlertOpen, setAlertOpen] = useState(false);
  const [isWarningOpen, setWarningOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const classes = useStyles();
  const history = useHistory();

  const { signIn } = useContext(FirebaseContext);
  const { isLogin } = useContext(UserContext);

  const handleRegistrationClick = () => {
    history.push(REGISTRATION_PATH);
  };

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
