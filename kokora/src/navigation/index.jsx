import React from "react";
import Login from "features/Auth/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "components/Header";
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
        {/* <Route path={"/product"} component={Product} /> */}
        {/* <Route path={"/user"} component={User} /> */}
        {/* <Route path={"/overview"} component={Overview} /> */}
        <Route path="/main" component={MainNavigator} />
      </Switch>
    </Router>
  );
}

export default AppNavigator;

const MainNavigator = () => (
  <>
    <Header />
    <Nav />
  </>
);
