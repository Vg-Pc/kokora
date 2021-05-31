import React from "react";
import "antd/dist/antd.css";
import { Popconfirm, message } from "antd";
import { RedoOutlined } from "@ant-design/icons";
import { ResetButton } from "../StyleUser";

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
      title="Bạn có chắc chắn muốn đặt lại"
      onConfirm={confirm}
      onCancel={cancel}
      okText="Đặt lại"
      cancelText="Quay lại"
      color="red"
    >
      <ResetButton type="text">
        <RedoOutlined />
        Đặt lại
      </ResetButton>
    </Popconfirm>
  );
}

export default UserDel;
