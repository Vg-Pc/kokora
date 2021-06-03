import React from "react";
import "antd/dist/antd.css";
import styled from "styled-components";
import UserDetail from "../UserDetail";
import { Table, Spin } from "antd";

const Row22Table = styled(Table)`
  width: 100%;
`;

const columns = [
  { title: "Người dùng", dataIndex: "user", key: "user" },
  { title: "Điện thoại", dataIndex: "numb", key: "numb" },
  { title: "Địa chỉ", dataIndex: "address", key: "address" },
  { title: "Loại", dataIndex: "type", key: "type" },
  { title: "Ngày tạo", dataIndex: "created", key: "created" },
  { title: "Ngày hết hạn", dataIndex: "expired", key: "expired" },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i + 1,
    user: `user ${i + 1}`,
    numb: `00000000 ${i + 1}`,
    address: `address ${i + 1}`,
    type: `type ${i + 1}`,
    created: `created ${i + 1}`,
    expired: `expired ${i + 1}`,
    description: <UserDetail />,
  });
}

function TablePro() {
  return (
    <Row22Table
      columns={columns}
      expandable={{
        expandedRowRender: (record) => (
          <p style={{ margin: 0 }}>{record.description}</p>
        ),
        rowExpandable: (record) => record.stt !== "Not Expandable",
      }}
      dataSource={data}
    />
  );
}
export default TablePro;
