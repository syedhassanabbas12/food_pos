import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Divider, Input, Button, Card, Col, Row } from 'antd';
function ChangePassword(props) {
  const { validateFields, getFieldDecorator } = props.form;

  const handleSubmit = (e) => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  return (
    <Card
      className='login-card'
      title={
        <span>
          <h3 className='ant-typography'>Change Password</h3>
        </span>
      }
      bordered={false}
    >
      <Form
        onSubmit={(e) => handleSubmit(e, props)}
        className='login-form'
        colon={false}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <Row>
          <Col span={24}>
            <Form.Item label='Old Password'>
              {getFieldDecorator('old_password', {
                rules: [
                  { required: true, message: 'Old Password is required' },
                ],
              })(<Input.Password />)}
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Form.Item label='New Password'>
              {getFieldDecorator('new_password', {
                rules: [
                  { required: true, message: 'New Password is required' },
                ],
              })(<Input.Password />)}
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Form.Item label='Confirm Password'>
              {getFieldDecorator('confirm_password', {
                rules: [
                  { required: true, message: 'Confirm Password is required' },
                ],
              })(<Input.Password />)}
            </Form.Item>
          </Col>
        </Row>

        <Divider />
        <Row>
          <Col span={24} className='btns-grp'>
            <Link to='/dashboard'>
              <Button style={{ marginLeft: 8 }}>Go Back</Button>
            </Link>

            <Button style={{ marginLeft: 8 }} type='primary' htmlType='submit'>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}

ChangePassword.propTypes = {
  form: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
};

const WrappedChangePassword = Form.create({
  name: 'change_password',
})(ChangePassword);

export default WrappedChangePassword;
