import React, { useState, useEffect, useContext, Suspense } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Layout from "./layout";
import { FirebaseContext, UserContext, ShoppingCartContext } from "./context";
import { app_routes, protected_routes } from "./routes";
import { COLLECTION_USERS } from "./constant/collection";

function App() {
  const [isLogin, setLogin] = useState(false);
  const [user, setUser] = useState({ id: "", email: "", lastSignInTime: "" });
  const [status, setStatus] = useState("initial");
  const [isChecked, setChecked] = useState(false);

  const { auth, db } = useContext(FirebaseContext);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection(COLLECTION_USERS)
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
            setLogin(true);
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
            <Suspense fallback={null}>
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
