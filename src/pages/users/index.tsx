import React, { useState } from 'react'
import { Table, Tag, Space, Modal } from 'antd';
import { connect } from 'umi'
import UserModal from './components/UserModal'

const index = ({ users, dispatch }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [record, setRecord] = useState(undefined)
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '用户名',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '创建时间',
      dataIndex: 'create_time',
      key: 'create_time',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '操作',
      key: 'id',
      render: (text, record) => (
        <span>
          <a onClick={() => { editHandle(record) }}>编辑</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a>删除</a>
        </span>
      ),
    },
  ];

  const editHandle = record => {
    setModalVisible(true)
    setRecord(record)
  }
  const handleClose = () => {
    setModalVisible(false)
  }
  const onFinish = value => {
    const id = record.id
    dispatch({
      type: 'users/edit',
      payload: {
        id,
        value
      }
    })
  }

  return <div className="list-table">
    <Table columns={columns} dataSource={users.data} />
    <UserModal visible={modalVisible}
      handleClose={handleClose}
      record={record}
      onFinish={onFinish}
    ></UserModal>
  </div>
}

const mapStateProps = ({ users }) => {
  return {
    users
  }
}
export default connect(mapStateProps)(index)