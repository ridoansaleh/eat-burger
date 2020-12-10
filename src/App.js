import React, { useState, useEffect, useContext } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Layout from "./layout";
import { FirebaseContext, UserContext, ShoppingCartContext } from "./context";
import { app_routes, protected_routes } from "./routes";

function App() {
  const [isLogin, setLogin] = useState(false);
  const [user, setUser] = useState({ id: "", email: "", lastSignInTime: "" });
  const [status, setStatus] = useState("initial");
  const [isChecked, setChecked] = useState(false);

  const { auth, db } = useContext(FirebaseContext);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLogin(true);
        db.collection("users")
          .where("email", "==", user.email)
          .get()
          .then((querySnapshot) => {
            let data = null;
            querySnapshot.forEach((doc) => {
              data = { id: doc.id, ...doc.data() };
            });
            setUser({
              id: data.id,
              email: data.email,
              lastSignInTime: user.metadata.lastSignInTime,
            });
            setChecked(true);
          })
          .catch((error) => {
            console.log("Error getting user information: ", error);
            setChecked(true);
          });
      } else {
        setLogin(false);
        setChecked(true);
      }
    });
  }, []);

  const appRoutes = isLogin ? [...app_routes, ...protected_routes] : app_routes;

  if (!isChecked) {
    return null;
  }

  return (
    <UserContext.Provider value={{ isLogin, ...user }}>
      <ShoppingCartContext.Provider value={{ status, onSetStatus: setStatus }}>
        <HashRouter>
          <Layout>
            <Switch>
              {appRoutes.map((data, index) => (
                <Route key={index} {...data} />
              ))}
            </Switch>
          </Layout>
        </HashRouter>
      </ShoppingCartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
