import React, { useEffect } from 'react';
import { Modal, Button, Form, Input, Checkbox } from 'antd';

const UserModal = (props) => {
  const { record, visible, handleClose, onFinish } = props
  const [form] = Form.useForm()
  useEffect(() => {
    form.setFieldsValue(record)
  }, [visible])

  const onOk = () => {
    form.submit()
  }
  return (
    <div>
      <Modal title="编辑"
        visible={visible}
        onOk={onOk}
        onCancel={handleClose}
        forceRender
      >
        <Form
          name="basic"
          form={form}
          onFinish={onFinish}
        >
          <Form.Item
            label="用户名"
            name="name"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="邮箱"
            name="email"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="创建时间"
            name="create_time"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="状态"
            name="status"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default UserModal