import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

function Firebase() {
  const props = {};

  if (typeof window !== "undefined" && !app.apps.length) {
    app.initializeApp(config);
    config.measurementId && app.analytics(); // not implemented yet, just initialize
  }

  const auth = app.auth();

  props.signUp = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

  props.signIn = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

  props.signOut = () => auth.signOut();

  props.auth = auth;

  props.db = app.firestore();

  return props;
}

export default Firebase;
