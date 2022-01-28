import React, { useState } from 'react';
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
  Checkbox,
} from 'antd';
import Styles from '../../styles/css-in-js';
import PermissionDropdown from './../common/custom-component/dropdowns/permission';
import PERMISSIONS from './../../config/permissions';

const { disabledAndSelected, permissions } = PERMISSIONS;

function AddRole(props) {
  const { getFieldDecorator, getFieldValue, setFieldsValue } = props.form;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const { id } = props.match.params;

        const formData = new FormData();
        id && formData.append('id', id);
        // props.actions.AddRole(formData);
      }
    });
  };

  const goBack = () => {
    const { history, location } = props;

    if (location.state && location.state.comingFrom)
      history.push(location.state.comingFrom);
    else history.push('/roles');
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
          <Col xs={24} sm={6} md={9} lg={9}>
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
        </Row>
        <Divider style={{ marginTop: '5px', marginBottom: '5px' }} />

        {permissions.map((option, index) => {
          return (
            <>
              <Row gutter={32}>
                <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                  <Form.Item label=''>
                    {getFieldDecorator(`${option.value}_CHECKBOX`, {
                      initialValue: false,
                    })(
                      <Checkbox
                        key={index}
                        value={option.value}
                        disabled={option.disabled}
                      >
                        {option.label}
                      </Checkbox>
                    )}
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={18} xl={18}>
                  <Form.Item label='Permission'>
                    {getFieldDecorator(`${option.value}_PERMISSION`, {
                      rules: [
                        {
                          required:
                            !option.disabled &&
                            getFieldValue(`${option.value}_CHECKBOX`),
                          message: `Permission level for ${option.value.toLowerCase()} is required`,
                        },
                      ],
                      initialValue: [],
                    })(
                      <PermissionDropdown
                        disabled={
                          option.disabled ||
                          !getFieldValue(`${option.value}_CHECKBOX`)
                        }
                        placeholder={option.disabled ? '- Full Access -' : null}
                      />
                    )}
                  </Form.Item>
                </Col>
              </Row>
            </>
          );
        })}
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
              {'Add Role'}
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

AddRole.propTypes = {
  form: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
};

const WrappedAddRole = Form.create({
  name: 'add_role',
})(AddRole);

export default WrappedAddRole;
