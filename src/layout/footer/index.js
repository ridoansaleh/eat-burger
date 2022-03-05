import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  YouTube as YouTubeIcon,
} from "@material-ui/icons";
import useStyles from "./_footerStyle";
import {
  PRIVACY_POLICY_PATH,
  TERMS_AND_CONDITIONS_PATH,
} from "../../constant/path";

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2>Eat Burger</h2>
          <div className={classes.linkWrapper}>
            <Link to={PRIVACY_POLICY_PATH} className={classes.generalLink}>
              Privacy Policy
            </Link>
            <Link
              to={TERMS_AND_CONDITIONS_PATH}
              className={classes.generalLink}
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
        <div className={classes.right}>
          <div>
            <h3>Follow us on:</h3>
            <div className={classes.socialMediaWrapper}>
              <a
                href="https://www.facebook.com/"
                className={classes.socialMediaLink}
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/"
                className={classes.socialMediaLink}
              >
                <InstagramIcon />
              </a>
              <a
                href="https://twitter.com/"
                className={classes.socialMediaLink}
              >
                <TwitterIcon />
              </a>
              <a
                href="https://www.youtube.com/"
                className={classes.socialMediaLink}
              >
                <YouTubeIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
