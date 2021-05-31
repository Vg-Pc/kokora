import React from "react";
import "antd/dist/antd.css";
import "./product.scss";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Descriptions, Image } from "antd";
import { DeleteButton } from "./StyleProduct";
import ProductAddEdit from "./Components/AddEditDel/ProductAddEdit";
import ProductDel from "./Components/AddEditDel/ProductDel";

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

function ProductDetail() {
  return (
    <Descriptions size="default" column={3} bordered>
      <Descriptions.Item label="Mã sản phẩm">{data.code}</Descriptions.Item>
      <Descriptions.Item label="Tên sản phẩm">{data.name}</Descriptions.Item>
      <Descriptions.Item label="Đơn vị tính">{data.unit}</Descriptions.Item>
      <Descriptions.Item label="Nhóm sản phẩm">{data.group}</Descriptions.Item>
      <Descriptions.Item label="Giá lẻ">{data.retail}</Descriptions.Item>
      <Descriptions.Item label="Giá sỉ">{data.wholesale}</Descriptions.Item>
      <Descriptions.Item label="Giá nhập">{data.import}</Descriptions.Item>
      <br />
      <br />

      <div className="prodeImg">
        <Image
          width={100}
          src="https://cdnmedia.eurofins.com/apac/media/603990/kiem-nghiem-thuc-an-chan-nuoi.jpg?width=500&height=333.59375"
        />
      </div>
      <br />
      <br />
      <div>
        <ProductAddEdit />
      </div>
      <div>
        <ProductDel />
      </div>
    </Descriptions>
  );
}

export default ProductDetail;
