import React, { useContext } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { FirebaseContext } from "./database";

import Layout from "./layout";
import appRoutes from "./routes";

function App() {
  const context = useContext(FirebaseContext);
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
