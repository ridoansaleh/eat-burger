import React, { useState, useEffect, useContext } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Layout from "./layout";
import { FirebaseContext } from "./database";
import { app_routes, protected_routes } from "./routes";

function App() {
  const [isLogin, setLogin] = useState(false);

  const { auth } = useContext(FirebaseContext);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLogin(true);
      } else {
        setLogin(false);
      }
    });
  }, []);

  const appRoutes = isLogin ? [...app_routes, ...protected_routes] : app_routes;

  return (
    <HashRouter>
      <Layout>
        <Switch>
          {appRoutes.map((data, index) => (
            <Route key={index} {...data} />
          ))}
        </Switch>
      </Layout>
    </HashRouter>
  );
}

export default App;
