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

const { TabPane } = Tabs;

function CompanyInformation(props) {
  const { getFieldDecorator } = props.form;
  const urlParams = new URLSearchParams(props.location.search);
  const selectedTab = urlParams.get('tab') || 'preferences';

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

  const renderGeneralPreferencesTab = () => {
    return (
      <TabPane tab='General Preferences' key='preferences'>
        <Row gutter={24}>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Date Format'>
              {
                <>
                  {getFieldDecorator('dateformat', {
                    rules: [
                      {
                        required: true,
                        message: 'Date Format is required',
                      },
                    ],
                    initialValue: null,
                  })(<Input />)}
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
      </TabPane>
    );
  };

  const renderBankDetailsTab = () => {
    return (
      <TabPane tab='Bank Details' key='bankdetails'>
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
      </TabPane>
    );
  };

  const renderDocumentNumberPrefixTab = () => {
    return (
      <TabPane tab='Document Prefix' key='documentprefix'>
        <Row gutter={24}>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Inventory Adjustment Prefix'>
              {
                <>
                  {getFieldDecorator('inventoryadjustmentprefix', {
                    rules: [
                      {
                        required: true,
                        message: 'Inventory Adjustment Prefix is required',
                      },
                    ],
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Inventory Transfer Prefix'>
              {
                <>
                  {getFieldDecorator('inventorytransferprefix', {
                    rules: [
                      {
                        required: true,
                        message: 'Inventory Transfer Prefix is required',
                      },
                    ],
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Sales Order Prefix'>
              {
                <>
                  {getFieldDecorator('salesorderprefix', {
                    rules: [
                      {
                        required: true,
                        message: 'Sales Order Prefix is required',
                      },
                    ],
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Sales Invoice Prefix'>
              {
                <>
                  {getFieldDecorator('salesinvoiceprefix', {
                    rules: [
                      {
                        required: true,
                        message: 'Sales Invoice is required',
                      },
                    ],
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Cash Sales Prefix'>
              {
                <>
                  {getFieldDecorator('cashsalesprefix', {
                    rules: [
                      {
                        required: true,
                        message: 'Cash Sales Prefix is required',
                      },
                    ],
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Sales Return Prefix'>
              {
                <>
                  {getFieldDecorator('salesreturnprefix', {
                    rules: [
                      {
                        required: true,
                        message: 'Sales Return Prefix is required',
                      },
                    ],
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Credit Memo Prefix'>
              {
                <>
                  {getFieldDecorator('creditmemoprefix', {
                    rules: [
                      {
                        required: true,
                        message: 'Credit Memo Prefix is required',
                      },
                    ],
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Purchase Order Prefix'>
              {
                <>
                  {getFieldDecorator('purchaseorderprefixx', {
                    rules: [
                      {
                        required: true,
                        message: 'Purchase Order Prefix is required',
                      },
                    ],
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Vendor Bill Prefix'>
              {
                <>
                  {getFieldDecorator('vendorbillprefix', {
                    rules: [
                      {
                        required: true,
                        message: 'Vendor Bill Prefix is required',
                      },
                    ],
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Vendor Credit Prefix'>
              {
                <>
                  {getFieldDecorator('vendorcreditprefix', {
                    rules: [
                      {
                        required: true,
                        message: 'Vendor Credit Prefix is required',
                      },
                    ],
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Vendor Retrun Prefix'>
              {
                <>
                  {getFieldDecorator('vendorreturnprefix', {
                    rules: [
                      {
                        required: true,
                        message: 'Vendor Return Prefix is required',
                      },
                    ],
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Expense Report Prefix'>
              {
                <>
                  {getFieldDecorator('expensereportprefix', {
                    rules: [
                      {
                        required: true,
                        message: 'Expense Report Prefix is required',
                      },
                    ],
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
        </Row>
      </TabPane>
    );
  };

  const renderDocumentNumberSufixTab = () => {
    return (
      <TabPane tab='Document Suffix' key='documentsuffix'>
        <Row gutter={24}>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Inventory Adjustment Suffix'>
              {
                <>
                  {getFieldDecorator('inventoryadjustmentsuffix', {
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Inventory Transfer Suffix'>
              {
                <>
                  {getFieldDecorator('inventorytransfersuffix', {
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Sales Order Suffix'>
              {
                <>
                  {getFieldDecorator('salesordersuffix', {
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Sales Invoice Suffix'>
              {
                <>
                  {getFieldDecorator('salesinvoicesuffix', {
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Cash Sales Suffix'>
              {
                <>
                  {getFieldDecorator('cashsalessuffix', {
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Sales Return Suffix'>
              {
                <>
                  {getFieldDecorator('salesreturnsuffix', {
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Credit Memo Suffix'>
              {
                <>
                  {getFieldDecorator('creditmemosuffix', {
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Purchase Order Suffix'>
              {
                <>
                  {getFieldDecorator('purchaseordersuffix', {
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Vendor Bill Suffix'>
              {
                <>
                  {getFieldDecorator('vendorbillsuffix', {
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Vendor Credit Suffix'>
              {
                <>
                  {getFieldDecorator('vendorcreditsuffix', {
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Vendor Retrun Suffix'>
              {
                <>
                  {getFieldDecorator('vendorreturnsuffix', {
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Expense Report Suffix'>
              {
                <>
                  {getFieldDecorator('expensereportsuffix', {
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
        </Row>
      </TabPane>
    );
  };

  const renderDocumentCurrentNumberTab = () => {
    return (
      <TabPane tab='Document Current Number' key='documentcurrentnumber'>
        <Row gutter={24}>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Inventory Adjustment Current Number'>
              {
                <>
                  <p>0</p>
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Inventory Transfer Current Number'>
              {
                <>
                  <p>0</p>
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Sales Order Current Number'>
              {
                <>
                  <p>0</p>
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Sales Invoice Current Number'>
              {
                <>
                  <p>0</p>
                </>
              }
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Cash Sales Current Number'>
              {
                <>
                  <p>0</p>
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Sales Return Current Number'>
              {
                <>
                  <p>0</p>
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Credit Memo Current Number'>
              {
                <>
                  <p>0</p>
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Purchase Order Current Number'>
              {
                <>
                  <p>0</p>
                </>
              }
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Vendor Bill Current Number'>
              {
                <>
                  <p>0</p>
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Vendor Credit Current Number'>
              {
                <>
                  <p>0</p>
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Vendor Retrun Current Number'>
              {
                <>
                  <p>0</p>
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Expense Report Current Number'>
              {
                <>
                  <p>0</p>
                </>
              }
            </Form.Item>
          </Col>
        </Row>
      </TabPane>
    );
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
        </Row>
        <Tabs defaultActiveKey={selectedTab}>
          {renderGeneralPreferencesTab()}
          {renderBankDetailsTab()}
          {renderDocumentNumberPrefixTab()}
          {renderDocumentNumberSufixTab()}
          {renderDocumentCurrentNumberTab()}
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
