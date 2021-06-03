import React, { useState } from "react";
import "antd/dist/antd.css";
import {
  Col,
  Row,
  Collapse,
  Affix,
  Input,
  Select,
  Button,
  DatePicker,
  Spin,
} from "antd";
import styled from "styled-components";
import UserRadio from "./Components/UserRadio";
import UserTable from "./Components/UserTable";
import "./user.scss";
import Header from "Components/Header";
import UserModal from "./Components/UserModal";

const { Panel } = Collapse;
const { Search } = Input;
const { Option } = Select;
const onSearch = (value) => console.log(value);
const { RangePicker } = DatePicker;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

function callback(key) {
  console.log(key);
}

function User() {
  return (
    <div>
      <Row className="user">
        <Col className="user__col1">
          <div className="user__co1Header">
            <label className="user__label">Tài khoản</label>
          </div>
          <Row className="user__row11">
            <Collapse
              defaultActiveKey={["1"]}
              onChange={callback}
              style={{ width: "100%" }}
            >
              <Panel header="Loại tài khoản" key="1">
                <div className="user__listItem">
                  <UserRadio />
                </div>
              </Panel>
            </Collapse>
          </Row>

          <Row className="user__row12">
            <Collapse
              defaultActiveKey={["1"]}
              onChange={callback}
              style={{ width: "100%" }}
            >
              <Panel header="Ngày tạo" key="1">
                <div className="user__listItem">
                  <RangePicker />
                </div>
              </Panel>
            </Collapse>
          </Row>

          <Row className="user__row13">
            <Collapse
              defaultActiveKey={["1"]}
              onChange={callback}
              style={{ width: "100%" }}
            >
              <Panel header="Tỉnh thành" key="1">
                <div className="user__listItem">
                  <Select
                    allowClear
                    style={{ width: "100%" }}
                    placeholder="Chọn tỉnh thành"
                    defaultValue={["a10", "c12"]}
                    onChange={handleChange}
                  >
                    {children}
                  </Select>
                </div>
              </Panel>
            </Collapse>
          </Row>
        </Col>

        <Col className="user__col2">
          <Affix>
            <Row className="user__col2Header">
              <div className="product__search">
                <Search
                  placeholder="Tìm kiếm tên, số điện thoại"
                  onSearch={onSearch}
                />
              </div>

              <UserModal />
            </Row>
          </Affix>
          <Row className="user__row22">
            <UserTable />
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default User;
