import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import useStyles from "./_resetPasswordStyle";
import { FirebaseContext } from "../../context";
import { LOGIN_PATH } from "../../constant/path";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [isPasswordResetSucceedOpen, setPasswordResetSucceedOpen] =
    useState(false);
  const [isPasswordResetFailedOpen, setPasswordResetFailedOpen] =
    useState(false);

  const classes = useStyles();
  const history = useHistory();
  const { auth } = useContext(FirebaseContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (loading) return;
    console.log("Testt");
    setLoading(true);
    setFormSubmitted(true);
    if (!newPassword || !confirmPassword || newPassword !== confirmPassword)
      return;

    // Extract the oobCode from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const oobCode = urlParams.get("oobCode");

    if (!oobCode) {
      alert("Invalid or missing reset code.");
      return;
    }

    // Verify the reset code
    auth
      .verifyPasswordResetCode(oobCode)
      .then(async () => {
        await auth.confirmPasswordReset(oobCode, newPassword);
      })
      .then(() => {
        setPasswordResetSucceedOpen(true);
        setNewPassword("");
        setConfirmPassword("");
        setTimeout(() => {
          history.push(LOGIN_PATH);
        }, 6500);
      })
      .catch((error) => {
        console.error("Error resetting password:", error);
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
          <h2 className={classes.pageTitle}>Reset Your Password</h2>
          <p className={classes.pageDescription}>
            Please create your new password and confirm!
          </p>
          <TextField
            label="New Password"
            type="password"
            variant="outlined"
            size="small"
            className={classes.input}
            error={isFormSubmitted && !newPassword}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            size="small"
            className={classes.input}
            error={
              isFormSubmitted &&
              (!confirmPassword || newPassword !== confirmPassword)
            }
            helperText={
              confirmPassword && newPassword !== confirmPassword ? "Password is not matched" : ""
            }
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.resetPasswordBtn}
          >
            Reset Password
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
          Password has been reset successfully! Please log in with your new
          password.
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
          Failed to reset password
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ResetPassword;
