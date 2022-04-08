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
import LocationDropdown from '../common/custom-component/dropdowns/location';
import ExpenseCategoryDropdown from '../common/custom-component/dropdowns/expense-category';
import Styles from '../../styles/css-in-js';
import EditableCell from '../EditableCell';

const { TabPane } = Tabs;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

function AddExpense(props) {
  const { getFieldDecorator } = props.form;
  const [dataSource, setDataSource] = useState([]);
  const [count, setcount] = useState(0);
  const urlParams = new URLSearchParams(props.location.search);
  const selectedTab = urlParams.get('tab') || 'expense';

  const itemColumns = [
    {
      title: 'No.',
      dataIndex: 'sr',
      editable: true,
      fieldType: Input,
      placeholder: 'Sr No.',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      fieldType: DatePicker,
      editable: true,
      placeholder: 'Date',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      editable: true,
      fieldType: ExpenseCategoryDropdown,
      placeholder: 'Category',
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
    else history.push('/expenses');
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
            <Form.Item label='Employee'>
              {
                <>
                  {getFieldDecorator('employee', {
                    rules: [
                      {
                        required: true,
                        message: 'Employee is required',
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
            <Form.Item label='Due Date'>
              {
                <>
                  {getFieldDecorator('duedate', {
                    initialValue: null,
                  })(<DatePicker />)}
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
              Add Expense
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

  const renderTabs = () => {
    return (
      <div>
        <Tabs defaultActiveKey={selectedTab}>{renderItemsTab()}</Tabs>
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
              {'Expense'}
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

AddExpense.propTypes = {
  form: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
};

const WrappedAddExpense = Form.create({
  name: 'add_expense',
})(AddExpense);

export default WrappedAddExpense;
