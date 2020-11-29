import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Layout from "./layout";
import appRoutes from "./routes";

function App() {
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
