import React, { Suspense } from "react";
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "./App.scss";
import Header from "./Components/Header";
import Auth from "./Components/Auth";
import "antd/dist/antd.css";
import {} from "@ant-design/icons";
import User from "features/User";
import Product from "features/Product";
import Overview from "features/Overview";
import AppNavigator from "navigation";

function App() {
  return (
    <div>
      {/* <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/auth" />
            <Route path="/header" component={Header} />
            <Route path="/auth" component={Auth} />
            <Route path="/user" component={User} />
            <Route path="/product" component={Product} />
            <Route path="/overview" component={Overview} />
          </Switch>
        </BrowserRouter>
      </Suspense> */}

      <AppNavigator />
    </div>
  );
}

export default App;
