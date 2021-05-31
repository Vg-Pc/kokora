import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Modal, Button, Form, Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { EditButton, DeleteButton, ModalListButton } from "../../StyleProduct";

const ProductModalList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

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

  return (
    <>
      <ModalListButton type="text" onClick={showModal}>
        <EditOutlined />
      </ModalListButton>
      <Modal
        title="Sửa nhóm mặt hàng"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
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
            label="Tên nhóm"
            name="username"
            placeholder="Vui lòng nhập Tên nhóm hàng"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập Tên nhóm hàng",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <EditButton key="submit" type="text" onClick={handleOk}>
              <EditOutlined />
              Cập nhật
            </EditButton>

            <DeleteButton key="delete" type="text" onClick={handleOk}>
              <DeleteOutlined />
              Xoá
            </DeleteButton>
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

export default ProductModalList;
