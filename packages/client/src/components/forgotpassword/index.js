import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Row, Card, Col, Layout } from 'antd';
import Styles from '../../styles/css-in-js';
import CONSTANTS from '../../constants/app-constants';

const { ASSETS } = CONSTANTS;

const ForgotPassword = (props) => {
  const { getFieldDecorator } = props.form;
  const handleSubmit = (e, props) => {
    const { validateFields } = props.form;

    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
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
                  <h3 className='ant-typography'>Forgot Password</h3>
                </span>
              }
              bordered={false}
            >
              <Form onSubmit={(e) => handleSubmit(e)} className='login-form'>
                <Row>
                  <Form.Item label='Email Address'>
                    {getFieldDecorator('email', {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your email address!',
                        },
                      ],
                    })(<Input />)}
                  </Form.Item>
                </Row>
                <Row>
                  <Col span={24} className='btns-grp'>
                    <Link to='/'>
                      <Button style={{ marginLeft: 8 }}>Go Back</Button>
                    </Link>

                    <Button
                      style={{ marginLeft: 8 }}
                      type='primary'
                      htmlType='submit'
                    >
                      Send Email
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

ForgotPassword.propTypes = {
  actions: PropTypes.object.isRequired,
};

const ForgotPasswordForm = Form.create({ name: 'forgot_password' })(
  ForgotPassword
);

export default ForgotPasswordForm;
