import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Step,
  Stepper,
  StepLabel,
  StepConnector,
  Button,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import {
  RestaurantMenu as RestaurantMenuIcon,
  Motorcycle as MotorcycleIcon,
  Payment as PaymentIcon,
} from "@material-ui/icons";
import Step1 from "./sections/Step1";
import Step2 from "./sections/Step2";
import Step3 from "./sections/Step3";
import useStyles from "./_orderStyle";
import { FirebaseContext, UserContext } from "../../context";
import { ORDER_SUCCESS_PATH } from "../../constant/path";
import {
  STORAGE_ORDER_LIST,
  STORAGE_ORDER_CREATOR,
  STORAGE_ORDER_ID,
} from "../../constant/storage";

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
    1: <RestaurantMenuIcon />,
    2: <MotorcycleIcon />,
    3: <PaymentIcon />,
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

const getTotalPrice = (arr) => {
  const { total_price } = arr.reduce(
    (ac, cr) => ({
      total_price: ac.total_price + cr.total_price,
    }),
    { total_price: 0 }
  );
  return total_price;
};

const steps = ["Menu", "Delivery Info", "Payment"];

function Order() {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setMobile] = useState(false);
  const [disableNextBtn, setDisableNextBtn] = useState(false);
  const [loading, setLoading] = useState(false);

  const classes = useStyles();
  const history = useHistory();

  let storageOrderList = sessionStorage.getItem(STORAGE_ORDER_LIST);
  storageOrderList = storageOrderList ? JSON.parse(storageOrderList) : [];

  let orderCreator = sessionStorage.getItem(STORAGE_ORDER_CREATOR);
  orderCreator = orderCreator ? JSON.parse(orderCreator) : null;

  const { db } = useContext(FirebaseContext);
  const { id: userId } = useContext(UserContext);

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
    } else {
      setLoading(true);
      const order_id = uuidv4();
      db.collection("orders")
        .doc(order_id)
        .set({
          ...orderCreator,
          user_id: userId,
          menus: storageOrderList,
          total_price:
            getTotalPrice(storageOrderList) +
            0.1 * getTotalPrice(storageOrderList),
          status: "process",
          time: format(new Date(), "EEEE, HH:mm:ss aaaa, dd MMM yyyy"),
        })
        .then(() => {
          sessionStorage.setItem(STORAGE_ORDER_ID, order_id);
          history.replace(ORDER_SUCCESS_PATH);
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
          setLoading(false);
        });
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
              <Step1 onGetTotalPrice={getTotalPrice} />
            </div>
          )}
        </>
        <>
          {activeStep === 1 && (
            <div className={classes.content}>
              <Step2 onSetDisableNextBtn={setDisableNextBtn} />
            </div>
          )}
        </>
        <>
          {activeStep === 2 && (
            <div className={classes.content}>
              <Step3 onGetTotalPrice={getTotalPrice} />
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
          <Button
            variant="contained"
            color="primary"
            disabled={activeStep === 1 && disableNextBtn}
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default Order;
