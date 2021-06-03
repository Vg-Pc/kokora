import React from "react";
import Login from "features/Auth/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "Components/Header";
import Nav from "./Nav";
import User from "features/User";
import Auth from "features/Auth";
import Product from "features/Product";
import Overview from "features/Overview";

function AppNavigator() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/auth" />
        <Route path={"/auth"} exact component={Auth} />
        <Route path={"/product"} exact component={Product} />
        <Route path={"/user"} exact component={User} />
        <Route path={"/overview"} exact component={Overview} />
        <Route path="/main" exact component={MainNavigator} />
      </Switch>
    </Router>
  );
}

export default AppNavigator;

const MainNavigator = () => (
  <>
    <Nav />
  </>
);
