import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Table,
  Icon,
  Button,
  Card,
  Collapse,
  Form,
  Row,
  Col,
  DatePicker,
} from 'antd';
import Styles from '../../styles/css-in-js';
import EmployeeDropdown from '../common/custom-component/dropdowns/employee';

const Panel = Collapse.Panel;
const { RangePicker } = DatePicker;

const data = [];
const columns = [
  {
    title: 'View',
    dataIndex: 'action',
    render: (text, record) => {
      return (
        <span>
          <Link to={`/viewitem/${record.itemid}`}>View</Link>
        </span>
      );
    },
  },
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Employee',
    dataIndex: 'employee',
  },
  {
    title: 'Transaction',
    dataIndex: 'transaction',
  },
  {
    title: 'Details',
    dataIndex: 'details',
  },
];

function SystemLogs(props) {
  const pagination = {
    current: 0,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
    position: 'both',
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });
  };

  const handleReset = () => {
    props.form.resetFields();
  };

  const renderAdvanceSearch = () => {
    const { getFieldDecorator } = props.form;
    return (
      <Collapse
        expandIcon={({ isActive }) =>
          isActive ? <Icon type='minus' /> : <Icon type='plus' />
        }
        style={{ marginBottom: '20px' }}
      >
        <Panel header='Filters' key='2'>
          <Form
            colon={false}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            onSubmit={handleSubmitSearch}
          >
            <Row gutter={24}>
              <Col xs={24} sm={12} md={6} lg={6}>
                <Form.Item label='Employee'>
                  <>
                    {getFieldDecorator('employee', {
                      initialValue: null,
                    })(<EmployeeDropdown />)}
                  </>
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6}>
                <Form.Item label='Date'>
                  <>
                    {getFieldDecorator('datetime', {
                      initialValue: null,
                    })(<RangePicker showTime />)}
                  </>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={24} className='btns-grp'>
                <Button type='primary' htmlType='submit'>
                  Search
                </Button>
                <Button style={{ marginLeft: 8 }} onClick={handleReset}>
                  Clear
                </Button>
              </Col>
            </Row>
          </Form>
        </Panel>
      </Collapse>
    );
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
            {'System Logs'}
          </h3>
        </span>
      }
      bordered={false}
    >
      <div>
        {renderAdvanceSearch()}

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

SystemLogs.propTypes = {
  form: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
};

const WrappedSystemLogs = Form.create({
  name: 'list_system_logs',
})(SystemLogs);

export default WrappedSystemLogs;
