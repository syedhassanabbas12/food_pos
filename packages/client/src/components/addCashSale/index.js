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
  InputNumber,
  DatePicker,
  Tabs,
  Table,
  Popconfirm,
  Descriptions,
} from 'antd';
import DepartmentDropdown from '../common/custom-component/dropdowns/department';
import ClassDropdown from '../common/custom-component/dropdowns/class';
import CustomerDropdown from '../common/custom-component/dropdowns/customer';
import EmployeeDropdown from '../common/custom-component/dropdowns/employee';
import LocationDropdown from '../common/custom-component/dropdowns/location';
import SubunitDropdown from '../common/custom-component/dropdowns/sub-unit';
import ItemsDropdown from '../common/custom-component/dropdowns/items';
import Styles from '../../styles/css-in-js';
import EditableCell from '../EditableCell';
import PaymentMode from '../common/custom-component/dropdowns/payment-mode';
import DeliveryType from '../common/custom-component/dropdowns/delivery-type';

const { TabPane } = Tabs;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

function AddCashSales(props) {
  const { getFieldDecorator } = props.form;
  const [dataSource, setDataSource] = useState([]);
  const [count, setcount] = useState(0);
  const urlParams = new URLSearchParams(props.location.search);
  const selectedTab = urlParams.get('tab') || 'items';

  const itemColumns = [
    {
      title: 'Item',
      dataIndex: 'item',
      editable: true,
      fieldType: ItemsDropdown,
      placeholder: 'Item',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      fieldType: Input,
      editable: true,
      placeholder: 'Description',
    },
    {
      title: 'Units',
      dataIndex: 'units',
      editable: true,
      fieldType: SubunitDropdown,
      placeholder: 'Units',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      editable: true,
      fieldType: InputNumber,
    },
    {
      title: 'Rate',
      dataIndex: 'rate',
      editable: true,
      fieldType: InputNumber,
      placeholder: 'Rate',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      editable: true,
      fieldType: InputNumber,
    },
    {
      title: 'Tax Rate(%)',
      dataIndex: 'taxrate',
      editable: true,
      fieldType: InputNumber,
    },
    {
      title: 'Tax Amount',
      dataIndex: 'taxamt',
      editable: true,
      fieldType: InputNumber,
    },
    {
      title: 'Gross Amount',
      dataIndex: 'grossamt',
      editable: true,
      disabled: true,
      fieldType: InputNumber,
    },
    {
      title: 'Memo',
      dataIndex: 'memo',
      editable: true,
      fieldType: Input,
      placeholder: 'Memo',
    },
    {
      title: 'Operation',
      dataIndex: 'operation',
      render: (text, record) =>
        dataSource?.length >= 1 ? (
          <>
            <Popconfirm
              title='Sure to delete?'
              onConfirm={() => handleDelete(record?.key)}
            >
              <a>Delete</a>
            </Popconfirm>

            <Popconfirm
              title='Sure to copy?'
              onConfirm={() => handleCopy(record?.key)}
            >
              <a style={{ marginLeft: 10 }}>Copy</a>
            </Popconfirm>
          </>
        ) : null,
    },
  ];

  const goBack = () => {
    const { history, location } = props;

    if (location.state && location.state.comingFrom)
      history.push(location.state.comingFrom);
    else history.push('/cashsales');
  };

  const handleDelete = (key) =>
    setDataSource(dataSource?.filter((item) => item?.key !== key));

  const handleCopy = () => {
    console.log('handlecopy');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  const handleReset = () => {
    props.form.resetFields();
  };

  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row?.key === item?.key);
    const item = newData?.[index];
    newData?.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };

  const components = {
    body: {
      row: EditableFormRow,
      cell: EditableCell,
    },
  };

  const finalItemsColumns = itemColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: handleSave,
        EditableContext: EditableContext,
        placeholder: col.placeholder,
        disabled: col.disabled,
        FieldType: col.fieldType,
      }),
    };
  });

  const handleAdd = () => {
    const newData = {};
    setDataSource([...dataSource, newData]);
    setcount((val) => val + 1);
  };

  const handleRemoveAll = () => {
    console.log('handleRemoveAll');
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
            <Form.Item label='Reference #'>
              {
                <>
                  {getFieldDecorator('tranid', {
                    rules: [
                      { required: true, message: 'Reference # is required' },
                    ],
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Date'>
              {
                <>
                  {getFieldDecorator('date', {
                    rules: [{ required: true, message: 'Date is required' }],

                    initialValue: null,
                  })(<DatePicker />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Customer'>
              {
                <>
                  {getFieldDecorator('entity', {
                    rules: [
                      {
                        required: true,
                        message: 'Entity is required',
                      },
                    ],
                    initialValue: null,
                  })(<CustomerDropdown />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Memo'>
              {
                <>
                  {getFieldDecorator('memo', {
                    rules: [],
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Sales Person'>
              {
                <>
                  {getFieldDecorator('salesrep', {
                    initialValue: null,
                  })(<EmployeeDropdown />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Location'>
              {
                <>
                  {getFieldDecorator('location', {
                    initialValue: null,
                  })(<LocationDropdown />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Department'>
              {
                <>
                  {getFieldDecorator('department', {
                    initialValue: null,
                  })(<DepartmentDropdown />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Class'>
              {
                <>
                  {getFieldDecorator('class', {
                    initialValue: '',
                  })(<ClassDropdown />)}
                </>
              }
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Start Date'>
              {
                <>
                  {getFieldDecorator('startdate', {
                    initialValue: null,
                  })(<DatePicker />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='End Date'>
              {
                <>
                  {getFieldDecorator('enddate', {
                    initialValue: null,
                  })(<DatePicker />)}
                </>
              }
            </Form.Item>
          </Col>
        </Row>

        {renderTabs()}
        {renderSummaryBox()}

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

  const renderItemsTab = () => {
    return (
      <TabPane tab='Items' key='items'>
        <Row gutter={24}>
          <Col span={24} className='btns-grp' style={{ marginBottom: 12 }}>
            <Button
              style={{ marginLeft: 8 }}
              onClick={handleAdd}
              type='primary'
            >
              Add Items
            </Button>

            <Button
              style={{ marginLeft: 8 }}
              onClick={handleRemoveAll}
              type='primary'
            >
              Remove all
            </Button>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={24}>
            <Table
              components={components}
              rowClassName={() => 'editable-row'}
              bordered
              dataSource={dataSource}
              columns={finalItemsColumns}
            />
          </Col>
        </Row>
      </TabPane>
    );
  };

  const renderShippingTab = () => {
    return (
      <TabPane tab='Shipping' key='shipping'>
        <Row gutter={24}>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Ship date'>
              {
                <>
                  {getFieldDecorator('shipdate', {
                    initialValue: null,
                  })(<DatePicker />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Ship to'>
              {
                <>
                  {getFieldDecorator('shipto', {
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Shipping Method'>
              {
                <>
                  {getFieldDecorator('shipmethod', {
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Shipping Carrier'>
              {
                <>
                  {getFieldDecorator('shipmethodcarrier', {
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

  const renderBillingTab = () => {
    return (
      <TabPane tab='Billing' key='billing'>
        <Row gutter={24}>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Bill to'>
              {
                <>
                  {getFieldDecorator('billto', {
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Payment Mode'>
              {
                <>
                  {getFieldDecorator('paymentmode', {
                    initialValue: null,
                  })(<PaymentMode />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Delivery Type'>
              {
                <>
                  {getFieldDecorator('deliverytype', {
                    initialValue: null,
                  })(<DeliveryType />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Rider'>
              {
                <>
                  {getFieldDecorator('rider', {
                    initialValue: null,
                  })(<EmployeeDropdown />)}
                </>
              }
            </Form.Item>
          </Col>
        </Row>
      </TabPane>
    );
  };

  const renderAccountingTab = () => {
    return (
      <TabPane tab='Accounting' key='acconting'>
        <Row gutter={24}>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Cheque#'>
              {
                <>
                  {getFieldDecorator('checquenumber', {
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Currency'>
              {
                <>
                  {getFieldDecorator('currency', {
                    initialValue: null,
                  })(<Input disabled />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Exchange Rate'>
              {
                <>
                  {getFieldDecorator('exchangerate', {
                    initialValue: null,
                  })(<Input disabled />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Tax ID'>
              {
                <>
                  {getFieldDecorator('taxid', {
                    initialValue: null,
                  })(<Input disabled />)}
                </>
              }
            </Form.Item>
          </Col>
        </Row>
      </TabPane>
    );
  };

  const renderCustomTab = () => {
    return (
      <TabPane tab='Custom' key='custom'>
        <Row gutter={24}>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='LPO#'>
              {
                <>
                  {getFieldDecorator('lpo', {
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Amount in Words'>
              {
                <>
                  {getFieldDecorator('amountinwords', {
                    initialValue: null,
                  })(<Input disabled />)}
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
                  })(<Input disabled />)}
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
                  })(<Input disabled />)}
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
                  })(<Input disabled />)}
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
                  })(<Input disabled />)}
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
                  })(<Input disabled />)}
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
                  })(<Input disabled />)}
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
                  })(<Input disabled />)}
                </>
              }
            </Form.Item>
          </Col>
        </Row>
      </TabPane>
    );
  };

  const renderTabs = () => {
    return (
      <div>
        <Tabs defaultActiveKey={selectedTab}>
          {renderItemsTab()}
          {renderShippingTab()}
          {renderBillingTab()}
          {renderAccountingTab()}
          {renderBankDetailsTab()}
          {renderCustomTab()}
        </Tabs>
      </div>
    );
  };

  const renderSummaryBox = () => {
    return (
      <Descriptions
        title='Summary'
        layout='vertical'
        column={4}
        size='small'
        bordered
      >
        <Descriptions.Item label='Subtotal'>$0.00</Descriptions.Item>
        <Descriptions.Item label='Discount Amount'>$0.00</Descriptions.Item>
        <Descriptions.Item label='Tax Amount'>$0.00</Descriptions.Item>
        <Descriptions.Item label='Total Amount'>$0.00</Descriptions.Item>
      </Descriptions>
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
              {'Cash Sales'}
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

AddCashSales.propTypes = {
  form: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
};

const WrappedAddCashSales = Form.create({
  name: 'add_cash_sales',
})(AddCashSales);

export default WrappedAddCashSales;
