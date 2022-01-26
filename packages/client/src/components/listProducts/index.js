import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Table, Icon, Button, Card, Collapse, Form, Row, Col } from 'antd';
import Styles from '../../styles/css-in-js';
import LocationDropdown from '../common/custom-component/dropdowns/location';
import ProductTypeDropdown from '../common/custom-component/dropdowns/product-type';

const Panel = Collapse.Panel;

const data = [];
const columns = [
  {
    title: 'Item',
    dataIndex: 'action',
    render: (text, record) => {
      return (
        <span>
          <Link to={`/viewitem/${record.itemid}`}>View</Link>
        </span>
      );
    },
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
  {
    title: 'Location',
    dataIndex: 'location',
  },
  {
    title: 'Price',
    dataIndex: 'rate',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
  },
];

function ListProducts(props) {
  const pagination = {
    current: 0,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
    position: 'both',
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });
  };

  const handleReset = () => {
    props.form.resetFields();
  };

  const renderAdvanceSearch = () => {
    const { getFieldDecorator } = props.form;
    return (
      <Collapse
        expandIcon={({ isActive }) =>
          isActive ? <Icon type='minus' /> : <Icon type='plus' />
        }
        style={{ marginBottom: '20px' }}
      >
        <Panel header='Filters' key='2'>
          <Form
            colon={false}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            onSubmit={handleSubmitSearch}
          >
            <Row gutter={24}>
              <Col xs={24} sm={12} md={6} lg={6}>
                <Form.Item label='Type'>
                  <>
                    {getFieldDecorator('type', {
                      initialValue: null,
                    })(<ProductTypeDropdown />)}
                  </>
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6}>
                <Form.Item label='Location'>
                  <>
                    {getFieldDecorator('location', {
                      initialValue: null,
                    })(<LocationDropdown />)}
                  </>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={24} className='btns-grp'>
                <Button type='primary' htmlType='submit'>
                  Search
                </Button>
                <Button style={{ marginLeft: 8 }} onClick={handleReset}>
                  Clear
                </Button>
              </Col>
            </Row>
          </Form>
        </Panel>
      </Collapse>
    );
  };
  return (
    <Card
      style={Styles.cardBottomMargin}
      title={
        <span>
          <h3 className='ant-typography'>
            <Link to={'/'} className='btn-back'>
              <Icon type='arrow-left' />
            </Link>
            {'Products'}
          </h3>
        </span>
      }
      bordered={false}
      extra={
        <Link to={`/addproduct`}>
          <Button
            style={{ marginLeft: 8 }}
            className='ant-btn ant-btn-primary btn-add'
          >
            Add Product
          </Button>
        </Link>
      }
    >
      <div>
        {renderAdvanceSearch()}

        <Table
          columns={columns}
          rowKey={(record) => record.id}
          dataSource={data}
          pagination={pagination}
          loading={false}
          onChange={() => {
            console.log('Table Changed');
          }}
          bordered
        />
      </div>
    </Card>
  );
}

ListProducts.propTypes = {
  form: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
};

const WrappedListProducts = Form.create({
  name: 'list_products',
})(ListProducts);

export default WrappedListProducts;
