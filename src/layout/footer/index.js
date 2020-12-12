import React from "react";
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  YouTube as YouTubeIcon,
} from "@material-ui/icons";
import useStyles from "./_footerStyle";

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2>Eat Burger</h2>
          <div className={classes.linkWrapper}>
            <a href="#" className={classes.generalLink}>
              Privacy Policy
            </a>
            <a href="#" className={classes.generalLink}>
              Terms and Conditions
            </a>
          </div>
        </div>
        <div className={classes.right}>
          <div>
            <h3>Follow us on:</h3>
            <div className={classes.socialMediaWrapper}>
              <FacebookIcon className={classes.socialMediaIcon} />
              <InstagramIcon className={classes.socialMediaIcon} />
              <TwitterIcon className={classes.socialMediaIcon} />
              <YouTubeIcon className={classes.socialMediaIcon} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
