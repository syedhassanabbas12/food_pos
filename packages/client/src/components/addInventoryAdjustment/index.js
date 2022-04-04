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
} from 'antd';
import CustomerDropdown from '../common/custom-component/dropdowns/customer';
import DepartmentDropdown from '../common/custom-component/dropdowns/department';
import ClassDropdown from '../common/custom-component/dropdowns/class';
import LocationDropdown from '../common/custom-component/dropdowns/location';
import SubunitDropdown from '../common/custom-component/dropdowns/sub-unit';
import ItemsDropdown from '../common/custom-component/dropdowns/items';
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

function AddInventoryAdjustment(props) {
  const { getFieldDecorator } = props.form;
  const [dataSource, setDataSource] = useState([]);
  const [count, setcount] = useState(0);

  const adjustmentColumns = [
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
      disabled: true,
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
      title: 'Quantity on Hand',
      dataIndex: 'qtyonhand',
      editable: true,
      disabled: true,
      fieldType: InputNumber,
    },
    {
      title: 'Quantity Adjust By',
      dataIndex: 'qtyadjustby',
      editable: true,
      fieldType: InputNumber,
      placeholder: 'Quantity Adjust By',
    },
    {
      title: 'New Quantity',
      dataIndex: 'New Quantity',
      editable: true,
      disabled: true,
      fieldType: InputNumber,
    },
    {
      title: 'Est. Unit Cost',
      dataIndex: 'estunitcost',
      editable: true,
      fieldType: InputNumber,
      placeholder: 'Est. Unit Cost',
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

  const handleDelete = (key) =>
    setDataSource(dataSource?.filter((item) => item?.key !== key));

  const handleCopy = () => {
    console.log('handleCopy');
  };
  const urlParams = new URLSearchParams(props.location.search);
  const selectedTab = urlParams.get('tab') || 'adjustments';

  const goBack = () => {
    const { history, location } = props;

    if (location.state && location.state.comingFrom)
      history.push(location.state.comingFrom);
    else history.push('/inventoryadjustments');
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

  const finalColumns = adjustmentColumns.map((col) => {
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
            <Form.Item label='Customer'>
              {
                <>
                  {getFieldDecorator('entity', {
                    initialValue: null,
                  })(<CustomerDropdown />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Estimated Total Value'>
              {
                <>
                  {getFieldDecorator('estimatedtotalvalue', {
                    initialValue: null,
                  })(<Input disabled />)}
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
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Memo'>
              {
                <>
                  {getFieldDecorator('memo', {
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Adjustment Location'>
              {
                <>
                  {getFieldDecorator('location', {
                    rules: [
                      {
                        required: true,
                        message: 'Adjustment Location is required',
                      },
                    ],
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

        {renderTabs()}

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

  const renderadjustmentsTab = () => {
    return (
      <TabPane tab='Adjustments' key='adjustments'>
        <Row gutter={24}>
          <Col span={24} className='btns-grp' style={{ marginBottom: 12 }}>
            <Button
              style={{ marginLeft: 8 }}
              onClick={handleAdd}
              type='primary'
            >
              Add Adjustment
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
              columns={finalColumns}
            />
          </Col>
        </Row>
      </TabPane>
    );
  };

  const renderTabs = () => {
    return (
      <div>
        <Tabs defaultActiveKey={selectedTab}>{renderadjustmentsTab()}</Tabs>
      </div>
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
              {'Add Inventory Adjustment'}
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

AddInventoryAdjustment.propTypes = {
  form: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
};

const WrappedAddInventoryAdjustment = Form.create({
  name: 'add_inventory_adjustment',
})(AddInventoryAdjustment);

export default WrappedAddInventoryAdjustment;
