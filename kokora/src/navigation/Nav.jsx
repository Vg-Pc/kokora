import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import User from "features/User";
import Product from "features/Product";
import Overview from "features/Overview";
import Header from "components/Header";
import Auth from "features/Auth";

function Nav() {
  return (
    // <BrowserRouter>
    <Switch>
      <Route path="/main/user" component={User} />
      <Route path="/main/product" component={Product} />
      <Route path="/main/overview" component={Overview} />
    </Switch>
    // </BrowserRouter>
  );
}

export default Nav;
