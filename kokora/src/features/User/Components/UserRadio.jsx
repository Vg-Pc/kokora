import React from "react";
import "antd/dist/antd.css";
import { Radio, Space } from "antd";

const UserRadio = () => {
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio value={1}>Tất cả</Radio>
        <Radio value={2}>Quản trị</Radio>
        <Radio value={3}>Nhân viên</Radio>
        <Radio value={4}>Đại lý</Radio>
      </Space>
    </Radio.Group>
  );
};

export default UserRadio;
