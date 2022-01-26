import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Icon, Button, Card } from 'antd';
import Styles from '../../styles/css-in-js';

const data = [];
const columns = [
  {
    title: 'View',
    dataIndex: 'action',
    render: (text, record) => {
      return (
        <span>
          <Link to={`/viewunit/${record.id}`}>View</Link>
        </span>
      );
    },
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Base Unit',
    dataIndex: 'baseunit',
  },
];

function ListUnits() {
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
            {'Units'}
          </h3>
        </span>
      }
      bordered={false}
      extra={
        <Link to={`/addunit`}>
          <Button
            style={{ marginLeft: 8 }}
            className='ant-btn ant-btn-primary btn-add'
          >
            Add Unit
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

export default ListUnits;
