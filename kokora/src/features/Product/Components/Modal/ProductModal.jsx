import React, { useState } from "react";
import { EditButton, ModalButton } from "../../StyleProduct";
import "antd/dist/antd.css";
import { Modal, Form, Input } from "antd";
import { PlusCircleOutlined, FileAddOutlined } from "@ant-design/icons";

const ProductModal = () => {
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

  function handleSubmit(e) {
    e.preventDefault();
    let data = new FormData(e.target);
    const user = [];
    for (let [name, value] of data) {
      console.log(name + " " + value);
      user.push(value);
    }
    this.setState({
      users: [...this.state.users, user],
    });
    e.target.reset();
    console.log(e.target);
  }

  return (
    <>
      <ModalButton type="text" onClick={showModal}>
        <PlusCircleOutlined />
      </ModalButton>
      <Modal
        title="Thêm nhóm mặt hàng"
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
          onSubmit={handleSubmit}
          id="ProductModal"
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
            <Input required />
            {/* <TodoForm onSubmit={handleTodoFormSubmit} />
            <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
          </Form.Item>

          <Form.Item {...tailLayout}>
            <EditButton type="text" type="submit">
              <FileAddOutlined /> Thêm nhóm mặt hàng
            </EditButton>
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

export default ProductModal;
