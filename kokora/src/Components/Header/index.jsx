import React, { useEffect } from "react";
import "./header.scss";
import { Row, Col, Menu } from "antd";
import { Container } from "reactstrap";
import {
  BrowserRouter,
  Route,
  Switch,
  useHistory,
  Link,
} from "react-router-dom";
import Product from "../../features/Product";
import User from "../../features/User";
import { HeaderMenu } from "./StyleHeader";
import "antd/dist/antd.css";
import {
  UserOutlined,
  PieChartOutlined,
  AuditOutlined,
  AppstoreOutlined,
  LineChartOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

// function callback(key) {
//   console.log(key);
// }

function Header(props) {
  // let history = useHistory();
  // const handleClick = (e) => {
  //   console.log(e);
  //   history.push("/");
  // };

  return (
    <>
      <Container className="header">
        <Row className="header__up">
          <Col className="header__logo">
            <div className="header__avt"></div>
            <label className="header__text">KOKORA</label>
          </Col>

          <Col className="header__user">
            <Menu mode="horizontal">
              <SubMenu icon={<UserOutlined />} title="User">
                <Menu.Item
                  icon={<UserOutlined />}
                  style={{ fontWeight: "500" }}
                >
                  Thông tin cá nhân
                </Menu.Item>
                <Menu.Item
                  icon={<LogoutOutlined />}
                  style={{ fontWeight: "500" }}
                >
                  Đăng xuất
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
        </Row>

        <Row className="header__down">
          <HeaderMenu
            // onChange={handleClick}
            triggerSubMenuAction="click"
            mode="horizontal"
          >
            <Menu.Item key="/overview">
              <Link to="/over">
                <PieChartOutlined />
                Tổng quan
              </Link>
            </Menu.Item>

            <Menu.Item key="/product">
              <Link to="/product">
                <AppstoreOutlined />
                Sản phẩm
              </Link>
            </Menu.Item>

            <Menu.Item key="3">
              <ShopOutlined />
              Kho hàng
            </Menu.Item>

            <Menu.Item key="4">
              <ShoppingCartOutlined />
              Giao dịch
            </Menu.Item>

            <Menu.Item key="5">
              <UsergroupAddOutlined />
              Đối tác
            </Menu.Item>

            <Menu.Item key="6">
              <LineChartOutlined />
              Báo cáo
            </Menu.Item>

            <Menu.Item key="/user">
              <Link to="/user">
                <AuditOutlined />
                Tài khoản
              </Link>
            </Menu.Item>
          </HeaderMenu>
        </Row>
      </Container>
    </>
  );
}

export default Header;
