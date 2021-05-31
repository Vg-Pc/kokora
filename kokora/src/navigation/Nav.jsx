import React from "react";
import { Switch, Route } from "react-router-dom";
import User from "features/User";

function Nav() {
  return (
    <Switch>
      <Route path="/user" component={User} />
      {/* <Route path="/dash-board" component={ } /> */}
    </Switch>
  );
}

export default Nav;
