import React from "react";
import "antd/dist/antd.css";
import styled from "styled-components";
import ProductDetail from "../../ProductDetail";
import { Table } from "antd";

const Row22Table = styled(Table)`
  width: 100%;
`;

const columns = [
  { title: "STT", dataIndex: "stt", key: "stt" },
  { title: "Mã sản phẩm", dataIndex: "code", key: "code" },
  { title: "Tên sản phẩm", dataIndex: "name", key: "name" },
  { title: "Đơn vị tính", dataIndex: "unit", key: "unit" },
  { title: "Nhóm mắt hàng", dataIndex: "group", key: "group" },
  { title: "Giá lẻ", dataIndex: "retail", key: "retail" },
  { title: "Giá sỉ", dataIndex: "wholesale", key: "wholesale" },
  { title: "Giá nhập", dataIndex: "import", key: "import" },
  { title: "Trạng thái", dataIndex: "status", key: "status" },
  { title: "Ngày tạo", dataIndex: "date", key: "date" },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i + 1,
    stt: i + 1,
    code: `code ${i + 1}`,
    name: `name ${i + 1}`,
    unit: `unit ${i + 1}`,
    group: `group ${i + 1}`,
    retail: `retail ${i + 1}`,
    wholesale: `wholesale ${i + 1}`,
    import: `import ${i + 1}`,
    status: `status ${i + 1}`,
    date: `date ${i + 1}`,
    description: <ProductDetail />,
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
