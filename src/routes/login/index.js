import React from "react";
import { useHistory } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import useStyles from "./_loginStyle";
import { REGISTRATION_PATH } from "../../utils/path";

function Login() {
  const classes = useStyles();
  const history = useHistory();

  const handleRegistrationClick = () => {
    history.push(REGISTRATION_PATH);
  };

  return (
    <div className={classes.container}>
      <div>
        <h1>Welcome to Eat Burger</h1>
        <p>Please write down your username & password</p>
        <form noValidate autoComplete="off" className={classes.boxForm}>
          <TextField label="Username" variant="outlined" size="small" />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            size="small"
          />
          <Button variant="contained" color="secondary">
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
    </div>
  );
}

export default Login;
