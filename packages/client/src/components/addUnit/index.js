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
  Table,
  Popconfirm,
  notification,
} from 'antd';
import Styles from '../../styles/css-in-js';
import EditableCell from '../EditableCell';

const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

function AddUnit(props) {
  const { getFieldDecorator } = props.form;
  const [dataSource, setDataSource] = useState([]);
  const [count, setcount] = useState(0);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      editable: true,
      fieldType: Input,
      placeholder: 'Name',
    },
    {
      title: 'Abbrevation',
      dataIndex: 'abbrevation',
      editable: true,
      fieldType: Input,
      placeholder: 'Abbrevation',
    },
    {
      title: 'Conversion Rate',
      dataIndex: 'conversionrate',
      editable: true,
      fieldType: InputNumber,
      placeholder: 'Conversion Rate',
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

  const handleDelete = (key) =>
    setDataSource(dataSource?.filter((item) => item?.key !== key));

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const { id } = props.match.params;

        const formData = new FormData();
        id && formData.append('id', id);
        // props.actions.AddUnit(formData);
      }
    });
  };

  const goBack = () => {
    const { history, location } = props;

    if (location.state && location.state.comingFrom)
      history.push(location.state.comingFrom);
    else history.push('/units');
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
            <Form.Item label='Name'>
              {
                <>
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Name is required' }],
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Abbrevation'>
              {
                <>
                  {getFieldDecorator('abbrevation', {
                    rules: [
                      { required: true, message: 'Abbrevation is required' },
                    ],
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Conversion Rate'>
              {
                <>
                  {getFieldDecorator('conversionrate', {
                    initialValue: 1.0,
                  })(<InputNumber style={{ width: '100%' }} disabled />)}
                </>
              }
            </Form.Item>
          </Col>
        </Row>

        <Divider />
        <>
          <Button
            onClick={handleAdd}
            type='primary'
            style={{ marginBottom: 16 }}
          >
            Add Subunit
          </Button>
          <Table
            components={components}
            rowClassName={() => 'editable-row'}
            bordered
            dataSource={dataSource}
            columns={finalColumns}
          />
        </>
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

  const finalColumns = columns.map((col) => {
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
    if (dataSource.length > 0 && !dataSource[dataSource.length - 1].name) {
      notification['error']({
        message: 'Invlaid Operation!!',
        description: 'Enter Subunit Name',
      });
    } else if (
      dataSource.length > 0 &&
      !dataSource[dataSource.length - 1].abbrevation
    ) {
      notification['error']({
        message: 'Inavlid Operation!!',
        description: 'Enter Abbrevation',
      });
    } else {
      const newData = {
        key: count,
        name: null,
        abbrevation: null,
        conversionrate: '1.00',
      };
      setDataSource([...dataSource, newData]);
      setcount((val) => val + 1);
    }
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
              {'Add Unit'}
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

AddUnit.propTypes = {
  form: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
};

const WrappedAddUnit = Form.create({
  name: 'add_class',
})(AddUnit);

export default WrappedAddUnit;
