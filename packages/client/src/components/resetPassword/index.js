import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Row, Card, Col, Layout } from 'antd';
import Styles from '../../styles/css-in-js';
import CONSTANTS from '../../constants/app-constants';
const { ASSETS } = CONSTANTS;

const getTokenFromQueryString = (queryString) => {
  const query = new URLSearchParams(queryString);
  return query.get('token');
};

const ResetPassword = (props) => {
  const { form } = props;
  const { getFieldDecorator } = form;
  const handleSubmit = (e) => {
    const { validateFields } = props.form;

    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const { location, form } = props;
        const { search } = location;
        const token = getTokenFromQueryString(search);
        console.log('token', token);
        values.token = token;
      }
    });
  };
  return (
    <Layout>
      <Row style={Styles.flexAlignMiddle}>
        <Col xs={{ span: 20, offset: 2 }} md={{ span: 8, offset: 8 }}>
          <div className='loginWrapper'>
            <div
              span={24}
              className='app-title'
              style={{ fontSize: 'xx-large' }}
            >
              {CONSTANTS.COMPANY_NAME}
            </div>
            <Card
              className='login-card'
              title={
                <span>
                  <h3 className='ant-typography'>Reset Password</h3>
                </span>
              }
              bordered={false}
            >
              <Form
                onSubmit={(e) => handleSubmit(e, props)}
                className='login-form'
              >
                <Row>
                  <Form.Item>
                    {getFieldDecorator('new_password', {
                      rules: [
                        {
                          required: true,
                          message: 'Please input new password!',
                        },
                      ],
                    })(
                      <Input.Password
                        prefix={
                          <Icon
                            type='lock'
                            style={{ color: 'rgba(0,0,0,.25)' }}
                          />
                        }
                        type='password'
                        placeholder='New Password'
                      />
                    )}
                  </Form.Item>
                </Row>
                <Row>
                  <Form.Item>
                    {getFieldDecorator('confirm_password', {
                      rules: [
                        {
                          required: true,
                          message: 'Please confirm your password!',
                        },
                      ],
                    })(
                      <Input.Password
                        prefix={
                          <Icon
                            type='lock'
                            style={{ color: 'rgba(0,0,0,.25)' }}
                          />
                        }
                        type='password'
                        placeholder='Confirm Password'
                      />
                    )}
                  </Form.Item>
                </Row>

                <Row>
                  <Col span={24} className='btns-grp'>
                    <Button
                      style={{ marginLeft: 8 }}
                      type='primary'
                      htmlType='submit'
                    >
                      Reset Password
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card>
            <div span={24} className='app-title'>
              <img src={`./../../assets/${ASSETS.COMPANY_LOGO}`} />
            </div>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

ResetPassword.propTypes = {
  form: PropTypes.object,
  location: PropTypes.object,
};

const ResetPasswordForm = Form.create({ name: 'reset_password' })(
  ResetPassword
);

export default ResetPasswordForm;
