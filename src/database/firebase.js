import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize once
if (!app.apps.length) {
  app.initializeApp(config);

  // Analytics should be initialized only in browser
  if (config.measurementId && typeof window !== "undefined") {
    import("firebase/analytics").then(() => {
      app.analytics();
    });
  }
}

// Singleton Object
const Firebase = {
  auth: app.auth(),
  db: app.firestore(),

  signUp(email, password) {
    return app.auth().createUserWithEmailAndPassword(email, password);
  },

  signIn(email, password) {
    return app.auth().signInWithEmailAndPassword(email, password);
  },

  signOut() {
    return app.auth().signOut();
  },
};

export default Firebase;
