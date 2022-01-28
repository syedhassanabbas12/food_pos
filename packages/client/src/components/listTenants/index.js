import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Icon, Button, Card, Popconfirm } from 'antd';
import Styles from '../../styles/css-in-js';

const data = [];
const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    width: '150px',
    render: (id) => {
      return (
        <Link to={`/viewtenant/${id}`}>
          <span className='nav-text'>{id}</span>
        </Link>
      );
    },
  },
  {
    title: 'Name',
    dataIndex: 'name',
    width: '19%',
  },
  {
    title: 'Tenant Id',
    dataIndex: 'account_id',
    width: '19%',
  },
  {
    title: 'Action',
    key: 'action',
    width: '19%',
    render: (text, record) => {
      return (
        <div style={{ display: 'flex' }}>
          {
            <Popconfirm
              title={
                'Are you sure you want to ' +
                (record.is_deleted ? 'Un Delete' : 'Delete') +
                ' this tenant'
              }
              onConfirm={() => {
                console.log('on Delee click');
              }}
              okText='Yes'
              cancelText='No'
              placement='left'
            >
              <Button type='primary' style={{ marginRight: '5px' }}>
                {record.is_deleted ? 'Un Delete Tenant' : 'Delete Tenant'}
              </Button>
            </Popconfirm>
          }
        </div>
      );
    },
  },
];

function ListTenants() {
  const pagination = {
    current: 0,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
    position: 'both',
  };

  return (
    <Card
      style={Styles.cardBottomMargin}
      title={
        <span>
          <h3 className='ant-typography'>
            <Link to={'/'} className='btn-back'>
              <Icon type='arrow-left' />
            </Link>
            {'Tenants'}
          </h3>
        </span>
      }
      bordered={false}
      extra={
        <Link to={`/addtenant`}>
          <Button
            style={{ marginLeft: 8 }}
            className='ant-btn ant-btn-primary btn-add'
          >
            Add Tenant
          </Button>
        </Link>
      }
    >
      <div>
        <Table
          columns={columns}
          rowKey={(record) => record.id}
          dataSource={data}
          pagination={pagination}
          loading={false}
          onChange={() => {
            console.log('Table Changed');
          }}
          bordered
        />
      </div>
    </Card>
  );
}

export default ListTenants;
