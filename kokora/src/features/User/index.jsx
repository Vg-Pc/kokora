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
import Header from "components/Header";
import UserModal from "./Components/UserModal";
import { PROVINCES } from "utils/constants";

const { Panel } = Collapse;
const { Search } = Input;
const { Option } = Select;
const onSearch = (value) => console.log(value);
const { RangePicker } = DatePicker;

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
                    showSearch
                    style={{ width: "100%" }}
                    placeholder="Chọn tỉnh thành"
                    optionFilterProp="children"
                  >
                    {PROVINCES.map((province) => {
                      return <Option value="1">{province.name}</Option>;
                    })}
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
