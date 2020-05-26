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
        <Route exact path="/">
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route path="/menus">
          <Layout>
            <Menus />
          </Layout>
        </Route>
        <Route path="/order">
          <Layout>
            <Order />
          </Layout>
        </Route>
        <Route path="/registration">
          <Layout>
            <Registration />
          </Layout>
        </Route>
        <Route path="/login">
          <Layout>
            <Login />
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
