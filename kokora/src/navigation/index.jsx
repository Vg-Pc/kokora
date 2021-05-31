import React from "react";
import Login from "Components/Auth/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "Components/Header";
import Nav from "./Nav";

function AppNavigator() {
  return (
    <Router>
      <Switch>
        <Route path={"/login"} exact component={Login} />
        <Route path="/" component={MainNavigator} />
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
