import React, { useState } from "react";
import "antd/dist/antd.css";
import { Modal, Button, Form, Input, DatePicker, Select } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { EditButton } from "../StyleUser";
import moment from "moment";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
const UserEdit = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const dateFormat = "YYYY/MM/DD";

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [fileList, setFileList] = useState([]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  return (
    <>
      <EditButton type="text" onClick={showModal}>
        <EditOutlined />
        Chỉnh sửa
      </EditButton>
      <Modal
        title="Thêm nhóm mặt hàng"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            Cập nhật
          </Button>,
        ]}
      >
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item label="Số điện thoại" placeholder="Mã sản phẩm">
            <Input disabled placeholder="Mã sản phẩm" />
          </Form.Item>

          <Form.Item
            label="Tên sản phẩm"
            name="name"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập",
              },
            ]}
          >
            <Input placeholder="Tên sản phẩm" />
          </Form.Item>

          <Form.Item
            label="Đơn vị tính"
            name="unit"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập",
              },
            ]}
          >
            <Input placeholder="Đơn vị tính" />
          </Form.Item>

          <Form.Item
            label="Ngày sinh"
            name="birth"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn",
              },
            ]}
          >
            <DatePicker
              defaultValue={moment("2015/01/01", dateFormat)}
              format={dateFormat}
            />
          </Form.Item>

          <Form.Item
            label="Tỉnh Thành"
            name="province"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn",
              },
            ]}
          >
            <Select
              allowClear
              style={{ width: "100%" }}
              placeholder="Chọn tỉnh thành"
              defaultValue={["a10", "a20"]}
              onChange={handleChange}
            >
              {children}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export default UserEdit;
