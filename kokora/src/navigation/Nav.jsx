import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import User from "features/User";
import Product from "features/Product";
import Overview from "features/Overview";
import Header from "Components/Header";
import Auth from "features/Auth";

function Nav() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/user" component={User} />
        <Route path="/product" component={Product} />
        <Route path="/overview" component={Overview} />
      </Switch>
    </BrowserRouter>
  );
}

export default Nav;
