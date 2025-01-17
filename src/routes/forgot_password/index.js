import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import useStyles from "./_forgotPasswordStyle";
import { FirebaseContext } from "../../context";
import { LOGIN_PATH } from "../../constant/path";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [isPasswordResetSucceedOpen, setPasswordResetSucceedOpen] =
    useState(false);
  const [isPasswordResetFailedOpen, setPasswordResetFailedOpen] =
    useState(false);

  const classes = useStyles();
  const history = useHistory();
  const { auth } = useContext(FirebaseContext);

  const handleBackClick = () => {
    history.push(LOGIN_PATH);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setFormSubmitted(true);
    if (!email) return;
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmail("");
        setPasswordResetSucceedOpen(true);
        setTimeout(() => {
          history.push(LOGIN_PATH);
        }, 6500);
      })
      .catch((error) => {
        console.log("Failed to send password reset email: ", error);
        setPasswordResetFailedOpen(true);
      })
      .finally(() => {
        setLoading(false);
        setFormSubmitted(false);
      });
  };

  return (
    <div className={classes.container}>
      <div className={classes.formWrapper}>
        <form
          noValidate
          autoComplete="off"
          className={classes.boxForm}
          onSubmit={handleFormSubmit}
        >
          <h2 className={classes.pageTitle}>Forgot Password?</h2>
          <p className={classes.pageDescription}>
            Enter your email address and we will send you instructions to reset
            your password.
          </p>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            size="small"
            className={classes.emailInput}
            error={isFormSubmitted && !email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.continueBtn}
          >
            Continue
          </Button>
          <Button color="primary" onClick={handleBackClick}>
            Back
          </Button>
        </form>
      </div>
      <Snackbar
        open={isPasswordResetSucceedOpen}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={6000}
        onClose={() => setPasswordResetSucceedOpen(false)}
      >
        <Alert
          onClose={() => setPasswordResetSucceedOpen(false)}
          severity="success"
        >
          Password reset email sent. Please check your inbox!
        </Alert>
      </Snackbar>
      <Snackbar
        open={isPasswordResetFailedOpen}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={5000}
        onClose={() => setPasswordResetFailedOpen(false)}
      >
        <Alert
          onClose={() => setPasswordResetFailedOpen(false)}
          severity="error"
        >
          Failed to send password reset email
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ForgotPassword;
