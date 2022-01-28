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
import TextArea from 'antd/lib/input/TextArea';
import PERMISSIONS from './../../config/permissions';

const { disabledAndSelected, permissions } = PERMISSIONS;

function AddTenant(props) {
  const { getFieldDecorator } = props.form;
  const initialCheckedList = [...disabledAndSelected];
  const intialState = {
    checkedList: initialCheckedList,
    indeterminate:
      !!initialCheckedList.length &&
      initialCheckedList.length < permissions.length,
    checkAll: initialCheckedList.length === permissions.length,
  };
  const [state, setState] = useState(intialState);

  const onChange = (checkedList) => {
    setState({
      ...state,
      checkedList,
      indeterminate:
        !!checkedList.length && checkedList.length < permissions.length,
      checkAll: checkedList.length === permissions.length,
    });
  };
  const onCheckAllChange = (e) => {
    setState({
      ...state,
      checkedList: e.target.checked
        ? permissions.map((option) => option.value)
        : disabledAndSelected,
      indeterminate: false,
      checkAll: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const { id } = props.match.params;

        const formData = new FormData();
        id && formData.append('id', id);
        // props.actions.AddTenant(formData);
      }
    });
  };

  const goBack = () => {
    const { history, location } = props;

    if (location.state && location.state.comingFrom)
      history.push(location.state.comingFrom);
    else history.push('/tenants');
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
          <Col xs={24} sm={6} md={3} lg={3}>
            <Form.Item label='Status'>
              <>
                {getFieldDecorator('active', {
                  initialValue: null,
                })(<Checkbox disabled>Is Active?</Checkbox>)}
              </>
            </Form.Item>
          </Col>
          <Col xs={24} sm={6} md={9} lg={9}>
            <Form.Item label='Tenant Name'>
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
          <Col xs={24} sm={12} md={12} lg={12}>
            <Form.Item label='Description'>
              {
                <>
                  {getFieldDecorator('description', {
                    initialValue: null,
                  })(<TextArea maxLength={1000} rows={5} />)}
                </>
              }
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item name='allowed_features' label='Allowed Features'>
              <Checkbox
                indeterminate={state.indeterminate}
                onChange={onCheckAllChange}
                checked={state.checkAll}
              >
                Check all features
              </Checkbox>

              <Divider style={{ marginTop: '5px', marginBottom: '5px' }} />

              {getFieldDecorator('features', {
                initialValue: state.checkedList,
                valuePropName: 'defaultValue',
              })(
                <Checkbox.Group value={state.checkedList} onChange={onChange}>
                  <Row gutter={32}>
                    {permissions.map((option, index) => {
                      return (
                        <Col span={6} key={index}>
                          <Checkbox
                            key={option.value}
                            value={option.value}
                            disabled={option.disabled}
                          >
                            {option.label}
                          </Checkbox>
                        </Col>
                      );
                    })}
                  </Row>
                </Checkbox.Group>
              )}
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
              {'Add Tenant'}
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

AddTenant.propTypes = {
  form: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
};

const WrappedAddTenant = Form.create({
  name: 'add_tenant',
})(AddTenant);

export default WrappedAddTenant;
