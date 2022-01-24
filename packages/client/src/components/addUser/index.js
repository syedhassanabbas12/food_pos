import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Card,
  Icon,
  Form,
  Row,
  Col,
  Divider,
  Button,
  Input,
  InputNumber,
  DatePicker,
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import EmployeeStatusDropdown from '../common/custom-component/dropdowns/employee-status';
import SalesRepDropdown from '../common/custom-component/dropdowns/employee';
import MaritalStatusDropdown from '../common/custom-component/dropdowns/marital-status';
import GenderDropdown from '../common/custom-component/dropdowns/gender';
import DepartmentDropdown from '../common/custom-component/dropdowns/department';
import DesignationDropdown from '../common/custom-component/dropdowns/designation';
import BranchDropdown from '../common/custom-component/dropdowns/branch';
import NationalityDropdown from '../common/custom-component/dropdowns/nationality';

import Styles from '../../styles/css-in-js';

function AddUser(props) {
  const { getFieldDecorator } = props.form;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const { id } = props.match.params;

        const formData = new FormData();
        id && formData.append('id', id);
        formData.append('empid', values.empid);
        formData.append('name', values.name);
        formData.append('gender', values.gender);
        formData.append('maritalstatus', values.maritalstatus);
        formData.append('branch', values.branch);
        formData.append('department', values.department);
        formData.append('designation', values.designation);
        formData.append('status', values.status);
        formData.append('email', values.email);
        formData.append('phone', values.phone);
        formData.append('password', values.password);
        formData.append('nationality', values.nationality);
        formData.append('address', values.address);
        formData.append('permanentaddress', values.permanentaddress);
        formData.append('homephone', values.homephone);
        formData.append('officephone', values.officephone);
        formData.append('dob', values.dob);
        formData.append('hiredate', values.hiredate);
        formData.append('bloodgroup', values.bloodgroup);
        formData.append('terminationdate', values.terminationdate);
        // props.actions.AddUser(formData);
      }
    });
  };

  const goBack = () => {
    const { history, location } = props;

    if (location.state && location.state.comingFrom)
      history.push(location.state.comingFrom);
    else history.push('/users');
  };

  const handleReset = () => {
    props.form.resetFields();
  };

  const renderForm = () => {
    return (
      <Form
        colon={false}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        onSubmit={handleSubmit}
      >
        <Row gutter={24}>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Employee ID'>
              {
                <>
                  {getFieldDecorator('empid', {
                    rules: [
                      { required: true, message: 'Employee ID is required' },
                    ],
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Name'>
              {
                <>
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Name is required' }],
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Gender'>
              {
                <>
                  {getFieldDecorator('gender', {
                    rules: [{ required: true, message: 'Gender is required' }],
                    initialValue: '',
                  })(<GenderDropdown />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Marital Status'>
              {
                <>
                  {getFieldDecorator('maritalstatus', {
                    initialValue: null,
                  })(<MaritalStatusDropdown />)}
                </>
              }
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Branch'>
              {
                <>
                  {getFieldDecorator('branch', {
                    rules: [{ required: true, message: 'Branch is required' }],
                    initialValue: null,
                  })(<BranchDropdown />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Department'>
              {
                <>
                  {getFieldDecorator('department', {
                    rules: [
                      { required: true, message: 'Department is required' },
                    ],
                    initialValue: null,
                  })(<DepartmentDropdown />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Designation'>
              {
                <>
                  {getFieldDecorator('designation', {
                    rules: [
                      { required: true, message: 'Designation is required' },
                    ],
                    initialValue: null,
                  })(<DesignationDropdown />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Status'>
              {
                <>
                  {getFieldDecorator('status', {
                    initialValue: null,
                  })(<EmployeeStatusDropdown />)}
                </>
              }
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Email'>
              {
                <>
                  {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Email is required' }],
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Password'>
              {
                <>
                  {getFieldDecorator('password', {
                    rules: [
                      { required: true, message: 'Password is required' },
                    ],
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Phone'>
              {
                <>
                  {getFieldDecorator('phone', {
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Nationality'>
              {
                <>
                  {getFieldDecorator('nationality', {
                    initialValue: null,
                  })(<NationalityDropdown />)}
                </>
              }
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Address'>
              {
                <>
                  {getFieldDecorator('address', {
                    initialValue: null,
                  })(<TextArea rows={3} maxLength={1000} />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Permanent Address'>
              {
                <>
                  {getFieldDecorator('permanentaddress', {
                    initialValue: null,
                  })(<TextArea rows={3} maxLength={1000} />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Home Phone'>
              {
                <>
                  {getFieldDecorator('homephone', {
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Office Phone'>
              {
                <>
                  {getFieldDecorator('officephone', {
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Date of Birth'>
              {
                <>
                  {getFieldDecorator('dob', {
                    initialValue: null,
                  })(<DatePicker />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Date of Joining'>
              {
                <>
                  {getFieldDecorator('hiredate', {
                    initialValue: null,
                  })(<DatePicker />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Blood Group'>
              {
                <>
                  {getFieldDecorator('bloodgroup', {
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Termination Date'>
              {
                <>
                  {getFieldDecorator('terminationdate', {
                    initialValue: null,
                  })(<DatePicker />)}
                </>
              }
            </Form.Item>
          </Col>
        </Row>
        <Divider />
        <Row gutter={24}>
          <Col span={24} className='btns-grp'>
            <Button style={{ marginLeft: 8 }} onClick={goBack}>
              Go Back
            </Button>

            {
              <>
                <Button style={{ marginLeft: 8 }} onClick={handleReset}>
                  Clear
                </Button>
                <Button
                  style={{ marginLeft: 8 }}
                  loading={false}
                  type='primary'
                  htmlType='submit'
                >
                  Add
                </Button>
              </>
            }
          </Col>
        </Row>
      </Form>
    );
  };

  return (
    <>
      <Card
        style={Styles.cardBottomMargin}
        title={
          <span>
            <h3 className='ant-typography'>
              <Link onClick={goBack} className='btn-back'>
                <Icon type='arrow-left' />
              </Link>
              {'Add User'}
            </h3>
          </span>
        }
        bordered={false}
      >
        {renderForm()}
      </Card>
    </>
  );
}

AddUser.propTypes = {
  form: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
};

const WrappedAddAddUser = Form.create({
  name: 'add_user',
})(AddUser);

export default WrappedAddAddUser;
