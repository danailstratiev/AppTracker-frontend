import React from 'react';
import 'antd/dist/antd.css';
import { Table, Space } from 'antd';
import '../index.css';

const columns = [
    {
      title: 'Application Name',
      dataIndex: 'appName',
      key: 'appName',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Modifier',
      dataIndex: 'modifier',
      key: 'modifier',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Version',
      dataIndex: 'version',
      key: 'version',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      appName: 'First Device',
      modifier: 'Admin',
      status: 'Active',
      version: '1.1.1',
    },
  ];

export class ApplicationsStatus extends React.Component {
  constructor(props) {
    super(props);
  }

  onFinish = values => {
    console.log('Received values of form: ', values);
  };
  render () {
    return(
        <div className="table-wrapper">
      <h1>Application Status - Table</h1>
          <Table
            bordered
            columns={columns} 
            dataSource={data}
          />
      </div>
    )
  }
}

export default ApplicationsStatus;