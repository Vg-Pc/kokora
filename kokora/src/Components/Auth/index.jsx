import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import "antd/dist/antd.css";
import "./auth.scss";
import Header from "Components/Header";
import User from "features/User";

function Login() {
  let history = useHistory();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    history.push("");
  };
  return (
    <div className="login">
      <div className="login__background"></div>
      <div className="login__container">
        <div className="login__logo"></div>
        <label className="login__title">KOKORA</label>
        <div className="login__box">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
              username: null,
              password: null,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tài khoản",
                },
                {
                  pattern: false,
                  message: "Số điện thoại không hợp lệ",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="login__icon" />}
                placeholder={"Tài khoản"}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
            >
              <Input
                prefix={<LockOutlined className="login__icon" />}
                type="password"
                placeholder={"Mật khẩu"}
              />
            </Form.Item>
            <Form.Item
              style={{
                textAlign: "right",
              }}
            >
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Ghi nhớ mật khẩu</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item
              style={{
                textAlign: "center",
              }}
            >
              {/* <BrowserRouter> */}
              <Button
                type="primary"
                htmlType="submit"
                className=" login-form-button"
                style={{
                  maxWidth: 200,
                  minWidth: 150,
                }}
              >
                {/* <Link to="/header">Đăng nhập</Link> */}
              </Button>

              {/* <Switch>
                  <Route path="/header" component={Header} />
                </Switch>
              </BrowserRouter> */}
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
