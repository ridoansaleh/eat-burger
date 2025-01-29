import React, { useState, useEffect, useContext, Suspense } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Layout from "./layout";
import useStyles from "./_appStyle";
import { FirebaseContext, UserContext, ShoppingCartContext } from "./context";
import useFirebaseAuth from "./hook/useFirebaseAuth";
import { logout_routes, logged_in_routes } from "./routes";
import { COLLECTION_USERS } from "./constant/collection";

function App() {
  const [isLogin, setLogin] = useState(false);
  const [user, setUser] = useState({ id: "", email: "", lastSignInTime: "" });
  const [status, setStatus] = useState("initial");
  const [isChecked, setChecked] = useState(false);

  const classes = useStyles();
  const { auth, db } = useContext(FirebaseContext);
  const authUser = useFirebaseAuth(auth);

  useEffect(() => {
    db.collection(COLLECTION_USERS)
      .where("email", "==", authUser?.email || "")
      .get()
      .then((querySnapshot) => {
        let data = null;
        querySnapshot.forEach((doc) => {
          data = { id: doc.id, ...doc.data() };
        });
        if (!data) throw new Error(`No user found with email: ${authUser?.email}`);
        setUser({
          id: data.id,
          email: data.email,
          lastSignInTime: authUser.metadata.lastSignInTime,
        });
        setLogin(true);
      })
      .catch((error) => {
        console.log("Error getting user information: ", error);
        setLogin(false);
      })
      .finally(() => {
        setChecked(true);
      });
  }, [authUser]);

  const appRoutes = isLogin ? logged_in_routes : logout_routes;

  if (!isChecked) {
    return null;
  }

  return (
    <UserContext.Provider value={{ isLogin, ...user }}>
      <ShoppingCartContext.Provider value={{ status, onSetStatus: setStatus }}>
        <HashRouter>
          <Layout>
            <Suspense fallback={<div className={classes.emptyScreen} />}>
              <Switch>
                {appRoutes.map((data, index) => (
                  <Route key={index} {...data} />
                ))}
              </Switch>
            </Suspense>
          </Layout>
        </HashRouter>
      </ShoppingCartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
