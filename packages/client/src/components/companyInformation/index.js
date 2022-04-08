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
  Upload,
  Tabs,
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import Styles from '../../styles/css-in-js';
import CountriesDropdown from '../common/custom-component/dropdowns/countries';
import CurrenciesDropdown from '../common/custom-component/dropdowns/currencies';
import WeekDaysDropdown from '../common/custom-component/dropdowns/week-days';

function CompanyInformation(props) {
  const { getFieldDecorator } = props.form;
  const urlParams = new URLSearchParams(props.location.search);
  const selectedTab = urlParams.get('tab') || 'bankdetails';

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const { id } = props.match.params;

        const formData = new FormData();
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
            <Form.Item label='Account ID'>
              {
                <>
                  {getFieldDecorator('accountid', {
                    initialValue: null,
                  })(<Input disabled />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Country'>
              {
                <>
                  {getFieldDecorator('country', {
                    rules: [{ required: true, message: 'Country is required' }],
                    initialValue: null,
                  })(<CountriesDropdown />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Currency'>
              {
                <>
                  {getFieldDecorator('currency', {
                    rules: [
                      { required: true, message: 'Currency is required' },
                    ],
                    initialValue: null,
                  })(<CurrenciesDropdown />)}
                </>
              }
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Date Format'>
              {
                <>
                  {getFieldDecorator('dateformat', {
                    rules: [
                      { required: true, message: 'Date Format is required' },
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
            <Form.Item label='Fax'>
              {
                <>
                  {getFieldDecorator('fax', {
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Email'>
              {
                <>
                  {getFieldDecorator('email', {
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Company Logo'>
              {
                <>
                  {getFieldDecorator('companylogo', {
                    initialValue: null,
                  })(
                    <Upload>
                      <Button>
                        <Icon type='upload' /> Select Image
                      </Button>
                    </Upload>
                  )}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Number of Rows is Table Segment'>
              {
                <>
                  {getFieldDecorator('rowsInATable', {
                    initialValue: null,
                  })(<InputNumber style={{ width: '100%' }} />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Print Page Size'>
              {
                <>
                  {getFieldDecorator('printPageSize', {
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='First Day of Week'>
              {
                <>
                  {getFieldDecorator('firstDayOfWeek', {
                    initialValue: null,
                  })(<WeekDaysDropdown />)}
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
                  })(<TextArea />)}
                </>
              }
            </Form.Item>
          </Col>
        </Row>
        <Tabs defaultActiveKey={selectedTab}>
          <Tabs.TabPane tab='Bank Details' key='bankdetails'>
            <Row gutter={24}>
              <Col xs={24} sm={12} md={6} lg={6}>
                <Form.Item label='Account Title'>
                  {
                    <>
                      {getFieldDecorator('accounttitle', {
                        initialValue: null,
                      })(<Input />)}
                    </>
                  }
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6}>
                <Form.Item label='Account#'>
                  {
                    <>
                      {getFieldDecorator('aaccountnumber', {
                        initialValue: null,
                      })(<Input />)}
                    </>
                  }
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6}>
                <Form.Item label='Bank Name'>
                  {
                    <>
                      {getFieldDecorator('bankname', {
                        initialValue: null,
                      })(<Input />)}
                    </>
                  }
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6}>
                <Form.Item label='Bank Address'>
                  {
                    <>
                      {getFieldDecorator('bankaddress', {
                        initialValue: null,
                      })(<Input />)}
                    </>
                  }
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col xs={24} sm={12} md={6} lg={6}>
                <Form.Item label='IBAN'>
                  {
                    <>
                      {getFieldDecorator('iban', {
                        initialValue: null,
                      })(<Input />)}
                    </>
                  }
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6}>
                <Form.Item label='Branch Code'>
                  {
                    <>
                      {getFieldDecorator('branchcode', {
                        initialValue: null,
                      })(<Input />)}
                    </>
                  }
                </Form.Item>
              </Col>

              <Col xs={24} sm={12} md={6} lg={6}>
                <Form.Item label='Swift Code'>
                  {
                    <>
                      {getFieldDecorator('swiftcode', {
                        initialValue: null,
                      })(<Input />)}
                    </>
                  }
                </Form.Item>
              </Col>
            </Row>
          </Tabs.TabPane>
        </Tabs>
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
