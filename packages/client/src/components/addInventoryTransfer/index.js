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

function AddInvetoryTransfer(props) {
  const { getFieldDecorator } = props.form;
  const [dataSource, setDataSource] = useState([]);
  const [count, setcount] = useState(0);
  const urlParams = new URLSearchParams(props.location.search);
  const selectedTab = urlParams.get('tab') || 'items';

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
      title: 'Quantity to transfer',
      dataIndex: 'qtytotransfer',
      editable: true,
      fieldType: InputNumber,
      placeholder: 'Quantity To Transfer',
    },
    {
      title: 'New Quantity',
      dataIndex: 'New Quantity',
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
          <Popconfirm
            title='Sure to delete?'
            onConfirm={() => handleDelete(record?.key)}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  const goBack = () => {
    const { history, location } = props;

    if (location.state && location.state.comingFrom)
      history.push(location.state.comingFrom);
    else history.push('/inventorytransfers');
  };

  const handleDelete = (key) =>
    setDataSource(dataSource?.filter((item) => item?.key !== key));

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
            <Form.Item label='From Location'>
              {
                <>
                  {getFieldDecorator('fromlocation', {
                    rules: [
                      {
                        required: true,
                        message: 'From Location is required',
                      },
                    ],
                    initialValue: null,
                  })(<LocationDropdown />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='To Location'>
              {
                <>
                  {getFieldDecorator('tolocation', {
                    rules: [
                      {
                        required: true,
                        message: 'To Location is required',
                      },
                    ],
                    initialValue: null,
                  })(<LocationDropdown />)}
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

  const renderItemsTab = () => {
    return (
      <TabPane tab='Items' key='items'>
        <Button onClick={handleAdd} type='primary' style={{ marginBottom: 16 }}>
          Add Items
        </Button>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={finalColumns}
        />
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
              {'Add Inventory Transfer'}
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

AddInvetoryTransfer.propTypes = {
  form: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
};

const WrappedAddInvetoryTransfer = Form.create({
  name: 'add_inventory_transfers',
})(AddInvetoryTransfer);

export default WrappedAddInvetoryTransfer;
