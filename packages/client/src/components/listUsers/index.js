import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Table, Icon, Button, Card, Collapse, Form, Row, Col } from 'antd';
import Styles from '../../styles/css-in-js';
import EmployeeStatus from '../common/custom-component/dropdowns/employee-status';
import BranchDropdown from '../common/custom-component/dropdowns/branch';
import DepartmentDropdown from '../common/custom-component/dropdowns/department';
import DesigantionDropdown from '../common/custom-component/dropdowns/designation';

const Panel = Collapse.Panel;

const data = [];
const columns = [
  {
    title: 'Employee ID',
    dataIndex: 'empid',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Designation',
    dataIndex: 'designation',
  },
  {
    title: 'Department',
    dataIndex: 'department',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: (text, record) => {
      return (
        <span>
          <Link to={`/viewuser/${record.id}`}>View</Link>
        </span>
      );
    },
  },
];

function ListUsers(props) {
  const pagination = {
    current: 0,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
    position: 'both',
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        const { status, branch, department, designation } = values;
        console.log(values);
        // props.actions.getUsers();
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
                <Form.Item label='Status'>
                  <>
                    {getFieldDecorator('status', {
                      initialValue: null,
                    })(<EmployeeStatus />)}
                  </>
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6}>
                <Form.Item label='Branch'>
                  <>
                    {getFieldDecorator('branch', {
                      initialValue: null,
                    })(<BranchDropdown />)}
                  </>
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6}>
                <Form.Item label='Department'>
                  <>
                    {getFieldDecorator('department', {
                      initialValue: null,
                    })(<DepartmentDropdown />)}
                  </>
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6}>
                <Form.Item label='Designation'>
                  <>
                    {getFieldDecorator('designation', {
                      initialValue: null,
                    })(<DesigantionDropdown />)}
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
            {'Users'}
          </h3>
        </span>
      }
      bordered={false}
      extra={
        <Link to={`/adduser`}>
          <Button
            style={{ marginLeft: 8 }}
            className='ant-btn ant-btn-primary btn-add'
          >
            Add User
          </Button>
        </Link>
      }
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

ListUsers.propTypes = {
  form: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
};

const WrappedListUsers = Form.create({
  name: 'list_users',
})(ListUsers);

export default WrappedListUsers;
