import React from "react";
import "antd/dist/antd.css";
import { Popconfirm, message } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { DeleteButton } from "../../StyleProduct";

function confirm(e) {
  console.log(e);
  message.success("Bạn đã xoá thành công");
}

function cancel(e) {
  console.log(e);
}

function ProductDel(props) {
  return (
    <Popconfirm
      title="Bạn có chắc chắn muốn xoá"
      onConfirm={confirm}
      onCancel={cancel}
      okText="Xoá"
      cancelText="Quay lại"
      color="red"
    >
      <DeleteButton type="text">
        <DeleteOutlined />
        Xoá
      </DeleteButton>
    </Popconfirm>
  );
}

export default ProductDel;
