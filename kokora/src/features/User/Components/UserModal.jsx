import React, { useState } from "react";
import { EditButton, ModalButton } from "features/User/StyleUser";
import "antd/dist/antd.css";
import { Modal, Button, Form, Input, DatePicker, Select } from "antd";
import moment from "moment";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
const UseModal = () => {
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
      <ModalButton type="primary" onClick={showModal}>
        Tạo tài khoản
      </ModalButton>
      <Modal
        title="Thêm nhóm mặt hàng"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            Tạo tài khoản
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
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập",
              },
            ]}
          >
            <Input placeholder="Nhập email" />
          </Form.Item>

          <Form.Item
            label="Tài khoản"
            name="name"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập",
              },
            ]}
          >
            <Input placeholder="Nhập tài khoản" />
          </Form.Item>

          <Form.Item
            label="Số điện thoại"
            name="numb"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập",
              },
            ]}
          >
            <Input placeholder="Nhập số điện thoại" />
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
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
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

export default UseModal;
