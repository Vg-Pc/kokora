import React from "react";
import "antd/dist/antd.css";
import {} from "@ant-design/icons";
import { Descriptions, Image } from "antd";
import UserEdit from "./Components/UserEdit";
import UserDel from "./Components/UserDel";
import UserReset from "./Components/UserReset";
import "./user.scss";

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i + 1,
    name: `name ${i + 1}`,
    email: `email ${i + 1}`,
    acctype: `acctype ${i + 1}`,
    agency: `agency ${i + 1}`,
    code: `code ${i + 1}`,
    birth: `birth ${i + 1}`,
    province: `province ${i + 1}`,
    create: `create ${i + 1}`,
    expired: `expired ${i + 1}`,
    numb: `numb ${i + 1}`,
    address: `adress ${i + 1}`,
    sex: `sex ${i + 1}`,
  });
}

function UserDetail() {
  return (
    <div>
      <Descriptions style={{ backgroundColor: "rgb(246 249 254)" }}>
        <Descriptions.Item label="Họ và tên">{data.name}</Descriptions.Item>
        <Descriptions.Item label="Mã người dùng">{data.code}</Descriptions.Item>
        <Descriptions.Item label="Số điện thoại">{data.numb}</Descriptions.Item>
        <Descriptions.Item label="Email">{data.email}</Descriptions.Item>
        <Descriptions.Item label="Ngày sinh">{data.birth}</Descriptions.Item>
        <Descriptions.Item label="Địa chỉ">{data.address}</Descriptions.Item>
        <Descriptions.Item label="Loại tài khoản">
          {data.acctype}
        </Descriptions.Item>
        <Descriptions.Item label="Tỉnh thành">
          {data.province}
        </Descriptions.Item>
        <Descriptions.Item label="Giới tính">{data.sex}</Descriptions.Item>
        <Descriptions.Item label="Tên đại lý">{data.agency}</Descriptions.Item>
        <Descriptions.Item label="Ngày tạo">{data.create}</Descriptions.Item>
        <Descriptions.Item label="Ngày hết hạn">
          {data.expired}
        </Descriptions.Item>

        <br />
        <br />
        <br />
      </Descriptions>
      <div className="detail__listButton">
        <div className="detail__button">
          <UserEdit />
        </div>

        <div className="detail__button">
          <UserReset />
        </div>

        <div className="detail__button">
          <UserDel />
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
