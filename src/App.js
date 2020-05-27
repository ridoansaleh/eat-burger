import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./routes/home";
import Menus from "./routes/menus";
import Order from "./routes/order";
import Registration from "./routes/registration";
import Login from "./routes/login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/eat-burger">
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route path="/eat-burger/menus">
          <Layout>
            <Menus />
          </Layout>
        </Route>
        <Route path="/eat-burger/order">
          <Layout>
            <Order />
          </Layout>
        </Route>
        <Route path="/eat-burger/registration">
          <Layout>
            <Registration />
          </Layout>
        </Route>
        <Route path="/eat-burger/login">
          <Layout>
            <Login />
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
