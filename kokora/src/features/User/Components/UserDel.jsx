import React from "react";
import "antd/dist/antd.css";
import { Popconfirm, message, Modal } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { DeleteButton } from "../StyleUser";

function confirm(e) {
  console.log(e);
  message.success("Bạn đã xoá thành công");
}

function cancel(e) {
  console.log(e);
}

function UserDel() {
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
        <EditOutlined />
        <DeleteOutlined />
        Xoá
      </DeleteButton>
    </Popconfirm>
  );
}

export default UserDel;
