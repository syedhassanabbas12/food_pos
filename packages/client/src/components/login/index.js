import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Card,
  Col,
  Row,
  Layout,
  notification,
} from "antd";
import Styles from "../../styles/css-in-js";
import CONSTANTS from "../../constants/app-constants";
import { addItem } from "../../services/storage-service";
import APP_CONSTANTS from "../../constants/app-constants";
import { signin } from "../../services/auth";
const { ASSETS } = CONSTANTS;

const Login = (props) => {
  const { getFieldDecorator } = props.form;

  const handleSubmit = (e) => {
    const { form } = props;
    const { validateFields } = form;

    e.preventDefault();
    validateFields(async (err, values) => {
      if (!err) {
        console.log("Received values from form", values);
        const response = await signin({
          email: values?.email,
          password: values?.password,
        });
        console.log("Received values from API", response);
        const { data, message, success } = response?.data;
        if (data && success) {
          addItem(APP_CONSTANTS.ACCESS_TOKEN, data?.token);
          addItem(APP_CONSTANTS.USER, JSON.stringify(data?.user));
          location.reload();
        } else {
          notification["error"]({
            message: message,
            description: "",
          });
        }
      }
    });
  };

  return (
    <Layout>
      <Row style={Styles.flexAlignMiddle}>
        <Col xs={{ span: 20, offset: 2 }} md={{ span: 8, offset: 8 }}>
          <div className="loginWrapper">
            <div
              span={24}
              className="app-title"
              style={{ fontSize: "xx-large" }}
            >
              {CONSTANTS.COMPANY_NAME}
            </div>
            <Card
              className="login-card"
              title={
                <span>
                  <h3 className="ant-typography">Login Page</h3>
                </span>
              }
              bordered={false}
            >
              <Form
                onSubmit={(e) => handleSubmit(e, props)}
                className="login-form"
              >
                <Row>
                  <Form.Item label="Email Address">
                    {getFieldDecorator("email", {
                      rules: [
                        {
                          required: true,
                          message: "Please input your email Address!",
                        },
                      ],
                    })(<Input />)}
                  </Form.Item>
                </Row>
                <Row>
                  <Form.Item label="Password">
                    {getFieldDecorator("password", {
                      rules: [
                        {
                          required: true,
                          message: "Please input your Password!",
                        },
                      ],
                    })(<Input.Password type="password" />)}
                  </Form.Item>
                </Row>
                <Row>
                  <Form.Item style={{ marginBottom: 0, textAlign: "center" }}>
                    <Link
                      to={`/forgotpassword`}
                      className="login-form-forgot"
                      style={Styles.rightAlign}
                    >
                      Forget Password
                    </Link>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      block
                      loading={false}
                    >
                      Log in
                    </Button>
                  </Form.Item>
                </Row>
              </Form>
            </Card>
            <div span={24} className="app-title">
              <img src={`./../../assets/${ASSETS.COMPANY_LOGO}`} />
            </div>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

Login.propTypes = {
  form: PropTypes.object,
  // LoginStore: PropTypes.object.isRequired,
};

const LoginForm = Form.create({ name: "login" })(Login);

export default LoginForm;
