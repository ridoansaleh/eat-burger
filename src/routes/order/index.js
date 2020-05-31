import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Step,
  Stepper,
  StepLabel,
  StepConnector,
  Button,
} from "@material-ui/core";
import {
  VideoLabel as VideoLabelIcon,
  GroupAdd as GroupAddIcon,
  Settings as SettingsIcon,
} from "@material-ui/icons";
import Step1 from "./sections/Step1";
import Step2 from "./sections/Step2";
import Step3 from "./sections/Step3";
import useStyles from "./_orderStyle";

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

const steps = ["Menu", "Delivery Info", "Payment"];

function Order() {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setMobile] = useState(false);
  const classes = useStyles();

  const handleWindowResize = () => {
    setMobile(window.outerWidth <= 600);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    setMobile(window.outerWidth <= 600);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleNext = () => {
    if (activeStep !== steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Stepper
          alternativeLabel={isMobile}
          activeStep={activeStep}
          className={classes.stepper}
          connector={<ColorlibConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <>
          {activeStep === 0 && (
            <div className={classes.content}>
              <Step1 />
            </div>
          )}
        </>
        <>
          {activeStep === 1 && (
            <div className={classes.content}>
              <Step2 />
            </div>
          )}
        </>
        <>
          {activeStep === 2 && (
            <div className={classes.content}>
              <Step3 />
            </div>
          )}
        </>
        <div className={classes.buttonGroup}>
          <Button
            disabled={activeStep === 0}
            variant="contained"
            color="secondary"
            onClick={handleBack}
            className={classes.backButton}
          >
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Order;
