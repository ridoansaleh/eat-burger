import React from "react";
import { Container, Typography, Button } from "@material-ui/core";
import useStyles from "./_termsAndConditionsStyle";

function TermsAndConditions() {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="md" className={classes.content}>
        <Typography variant="h4" component="h4" className={classes.title}>
          Terms And Conditions
        </Typography>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <ol>
          <li>
            <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b>
            <Typography variant="body2" gutterBottom>
              In vitae faucibus ligula. Fusce vehicula porta diam nec auctor.
              Duis diam libero, efficitur eget sem vel, blandit accumsan velit.
              Nunc sapien elit, volutpat sed enim non, dictum accumsan justo.
              Pellentesque blandit nisl ut justo tincidunt dignissim.
              Pellentesque vitae nisi cursus, posuere lectus at, suscipit orci.
              Phasellus ac convallis nibh. Aenean aliquet dui sed eros
              elementum, vitae vehicula justo dictum. Pellentesque vulputate
              tincidunt nisl eu euismod. Vivamus libero sem, blandit a tellus
              sit amet, laoreet facilisis leo. Duis ex erat, rhoncus eu
              ullamcorper at, cursus vel risus. Etiam fringilla odio nibh, a
              efficitur enim bibendum at. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Nam a
              interdum metus.
            </Typography>
          </li>
          <li>
            <b>
              Integer tincidunt lacus et quam finibus, in finibus magna sodales.
            </b>
            <Typography variant="body2" gutterBottom>
              Quisque condimentum efficitur leo ornare tristique. Proin
              sollicitudin tincidunt metus, et porttitor odio pellentesque at.
              Aenean euismod lorem quis bibendum tempor. Sed sit amet eros
              suscipit, finibus purus sit amet, tristique lorem. Nunc sed
              scelerisque ipsum, eu accumsan lacus. Vivamus blandit nisl eu
              augue auctor, in tristique orci suscipit. Vivamus a dolor non
              ipsum suscipit tincidunt ut vitae augue. Phasellus sollicitudin
              risus eu velit mollis convallis. Aliquam dolor urna, malesuada et
              justo in, consectetur porttitor lorem. Vestibulum auctor at diam
              id consequat. Mauris blandit porta odio in molestie. Nunc et
              condimentum lacus. Donec rhoncus at tellus sed lacinia. Donec
              efficitur enim in turpis tempor gravida. Nulla pretium pharetra
              lorem, ac laoreet justo porttitor volutpat. Nulla vel enim
              dignissim justo auctor ultricies.
            </Typography>
          </li>
          <li>
            <b>Fusce non mauris id justo semper mattis sed ac sem.</b>
            <Typography variant="body2" gutterBottom>
              Vivamus sodales est sit amet lobortis gravida. Quisque venenatis,
              ante quis ultricies efficitur, metus ipsum facilisis eros, eget
              aliquet purus ante id mi. Ut elit felis, porta et ornare ut,
              elementum nec dolor. Donec eu tempus mauris. Quisque feugiat
              ultrices cursus. Sed suscipit odio eu nisi ornare fermentum. Sed
              dignissim luctus erat, quis maximus risus elementum id. Etiam
              imperdiet rutrum faucibus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </Typography>
          </li>
          <li>
            <b>
              Nam laoreet est a ligula iaculis, vitae luctus augue malesuada.
            </b>
            <Typography variant="body2" gutterBottom>
              Nullam sagittis leo vitae convallis ullamcorper. In suscipit
              ligula arcu, in condimentum tortor dapibus at. Donec eu tellus ut
              neque dapibus sagittis elementum et urna. Aliquam blandit ac massa
              quis volutpat. Cras vel commodo mi. Quisque laoreet nibh risus, ac
              eleifend est venenatis quis. Sed pharetra mi eu nibh egestas, eget
              pretium orci vestibulum. Vestibulum euismod blandit sem, id
              vulputate lectus euismod in. Cras vulputate neque non ex sodales,
              at accumsan ipsum vestibulum. Donec porta nulla arcu, in lobortis
              sapien commodo vel. Fusce ultrices et neque ac cursus. Praesent
              auctor felis et urna fermentum, in gravida lectus pharetra. Mauris
              euismod elit sem, a scelerisque eros elementum vel. Mauris id
              sagittis nulla. Vivamus elit lorem, dignissim ut venenatis non,
              fermentum eu neque. Nam sit amet justo nulla.
            </Typography>
          </li>
          <li>
            <b>
              Curabitur dignissim odio sit amet dolor vestibulum, in cursus
              purus viverra.
            </b>
            <Typography variant="body2" gutterBottom>
              In vitae faucibus ligula. Fusce vehicula porta diam nec auctor.
              Duis diam libero, efficitur eget sem vel, blandit accumsan velit.
              Nunc sapien elit, volutpat sed enim non, dictum accumsan justo.
              Pellentesque blandit nisl ut justo tincidunt dignissim.
              Pellentesque vitae nisi cursus, posuere lectus at, suscipit orci.
              Phasellus ac convallis nibh. Aenean aliquet dui sed eros
              elementum, vitae vehicula justo dictum. Pellentesque vulputate
              tincidunt nisl eu euismod. Vivamus libero sem, blandit a tellus
              sit amet, laoreet facilisis leo. Duis ex erat, rhoncus eu
              ullamcorper at, cursus vel risus. Etiam fringilla odio nibh, a
              efficitur enim bibendum at. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Nam a
              interdum metus.
            </Typography>
          </li>
          <li>
            <b>Donec nec augue sed justo semper blandit ut tincidunt tellus.</b>
            <Typography variant="body2" gutterBottom>
              Quisque condimentum efficitur leo ornare tristique. Proin
              sollicitudin tincidunt metus, et porttitor odio pellentesque at.
              Aenean euismod lorem quis bibendum tempor. Sed sit amet eros
              suscipit, finibus purus sit amet, tristique lorem. Nunc sed
              scelerisque ipsum, eu accumsan lacus. Vivamus blandit nisl eu
              augue auctor, in tristique orci suscipit. Vivamus a dolor non
              ipsum suscipit tincidunt ut vitae augue. Phasellus sollicitudin
              risus eu velit mollis convallis. Aliquam dolor urna, malesuada et
              justo in, consectetur porttitor lorem. Vestibulum auctor at diam
              id consequat. Mauris blandit porta odio in molestie. Nunc et
              condimentum lacus. Donec rhoncus at tellus sed lacinia. Donec
              efficitur enim in turpis tempor gravida. Nulla pretium pharetra
              lorem, ac laoreet justo porttitor volutpat. Nulla vel enim
              dignissim justo auctor ultricies.
            </Typography>
          </li>
          <li>
            <b>
              Nullam sit amet nulla consectetur, convallis nisi eget,
              ullamcorper metus.
            </b>
            <Typography variant="body2" gutterBottom>
              Vivamus sodales est sit amet lobortis gravida. Quisque venenatis,
              ante quis ultricies efficitur, metus ipsum facilisis eros, eget
              aliquet purus ante id mi. Ut elit felis, porta et ornare ut,
              elementum nec dolor. Donec eu tempus mauris. Quisque feugiat
              ultrices cursus. Sed suscipit odio eu nisi ornare fermentum. Sed
              dignissim luctus erat, quis maximus risus elementum id. Etiam
              imperdiet rutrum faucibus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </Typography>
          </li>
          <li>
            <b>
              Mauris vulputate magna commodo, fermentum quam vitae, efficitur
              risus.
            </b>
            <Typography variant="body2" gutterBottom>
              Nullam sagittis leo vitae convallis ullamcorper. In suscipit
              ligula arcu, in condimentum tortor dapibus at. Donec eu tellus ut
              neque dapibus sagittis elementum et urna. Aliquam blandit ac massa
              quis volutpat. Cras vel commodo mi. Quisque laoreet nibh risus, ac
              eleifend est venenatis quis. Sed pharetra mi eu nibh egestas, eget
              pretium orci vestibulum. Vestibulum euismod blandit sem, id
              vulputate lectus euismod in. Cras vulputate neque non ex sodales,
              at accumsan ipsum vestibulum. Donec porta nulla arcu, in lobortis
              sapien commodo vel. Fusce ultrices et neque ac cursus. Praesent
              auctor felis et urna fermentum, in gravida lectus pharetra. Mauris
              euismod elit sem, a scelerisque eros elementum vel. Mauris id
              sagittis nulla. Vivamus elit lorem, dignissim ut venenatis non,
              fermentum eu neque. Nam sit amet justo nulla.
            </Typography>
          </li>
          <li>
            <b>Pellentesque in nunc a odio suscipit elementum id non augue.</b>
            <Typography variant="body2" gutterBottom>
              In vitae faucibus ligula. Fusce vehicula porta diam nec auctor.
              Duis diam libero, efficitur eget sem vel, blandit accumsan velit.
              Nunc sapien elit, volutpat sed enim non, dictum accumsan justo.
              Pellentesque blandit nisl ut justo tincidunt dignissim.
              Pellentesque vitae nisi cursus, posuere lectus at, suscipit orci.
              Phasellus ac convallis nibh. Aenean aliquet dui sed eros
              elementum, vitae vehicula justo dictum. Pellentesque vulputate
              tincidunt nisl eu euismod. Vivamus libero sem, blandit a tellus
              sit amet, laoreet facilisis leo. Duis ex erat, rhoncus eu
              ullamcorper at, cursus vel risus. Etiam fringilla odio nibh, a
              efficitur enim bibendum at. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Nam a
              interdum metus.
            </Typography>
          </li>
          <li>
            <b>Nunc vel elit ultrices, vehicula purus nec, luctus tellus.</b>
            <Typography variant="body2" gutterBottom>
              Quisque condimentum efficitur leo ornare tristique. Proin
              sollicitudin tincidunt metus, et porttitor odio pellentesque at.
              Aenean euismod lorem quis bibendum tempor. Sed sit amet eros
              suscipit, finibus purus sit amet, tristique lorem. Nunc sed
              scelerisque ipsum, eu accumsan lacus. Vivamus blandit nisl eu
              augue auctor, in tristique orci suscipit. Vivamus a dolor non
              ipsum suscipit tincidunt ut vitae augue. Phasellus sollicitudin
              risus eu velit mollis convallis. Aliquam dolor urna, malesuada et
              justo in, consectetur porttitor lorem. Vestibulum auctor at diam
              id consequat. Mauris blandit porta odio in molestie. Nunc et
              condimentum lacus. Donec rhoncus at tellus sed lacinia. Donec
              efficitur enim in turpis tempor gravida. Nulla pretium pharetra
              lorem, ac laoreet justo porttitor volutpat. Nulla vel enim
              dignissim justo auctor ultricies.
            </Typography>
          </li>
        </ol>
        <Button
          variant="contained"
          color="primary"
          className={classes.agreeBtn}
        >
          Agree
        </Button>
      </Container>
    </div>
  );
}

export default TermsAndConditions;
