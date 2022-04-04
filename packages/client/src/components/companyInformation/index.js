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
  DatePicker,
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import EmployeeStatusDropdown from '../common/custom-component/dropdowns/employee-status';
import MaritalStatusDropdown from '../common/custom-component/dropdowns/marital-status';
import RoleDropdown from '../common/custom-component/dropdowns/roles';
import GenderDropdown from '../common/custom-component/dropdowns/gender';
import DepartmentDropdown from '../common/custom-component/dropdowns/department';
import DesignationDropdown from '../common/custom-component/dropdowns/designation';
import ClassDropdown from '../common/custom-component/dropdowns/class';
import LocationDropdown from '../common/custom-component/dropdowns/location';
import NationalityDropdown from '../common/custom-component/dropdowns/nationality';
import BloodGroupDropdown from '../common/custom-component/dropdowns/bloodgroup';
import Styles from '../../styles/css-in-js';

function CompanyInformation(props) {
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
        formData.append('location', values.location);
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
        // props.actions.CompanyInformation(formData);
      }
    });
  };

  const goBack = () => {
    const { history, location } = props;

    if (location.state && location.state.comingFrom)
      history.push(location.state.comingFrom);
    else history.push('/');
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
            <Form.Item label='Company Name'>
              {
                <>
                  {getFieldDecorator('companyname', {
                    rules: [
                      { required: true, message: 'Company Name is required' },
                    ],
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Tenant ID'>
              {
                <>
                  {getFieldDecorator('tenanntid', {
                    initialValue: null,
                  })(<Input disabled />)}
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
                  Save
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
              {'Company Information'}
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

CompanyInformation.propTypes = {
  form: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
};

const WrappedCompanyInformation = Form.create({
  name: 'company_information',
})(CompanyInformation);

export default WrappedCompanyInformation;
