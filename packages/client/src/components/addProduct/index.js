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
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import UnitDropdown from '../common/custom-component/dropdowns/unit';
import Styles from '../../styles/css-in-js';
import LocationDropdown from '../common/custom-component/dropdowns/location';
import ProductTypeDropdown from '../common/custom-component/dropdowns/product-type';

function AddProduct(props) {
  const { getFieldDecorator } = props.form;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);

        const formData = new FormData();
        // props.actions.AddProduct(formData);
      }
    });
  };

  const goBack = () => {
    const { history, location } = props;

    if (location.state && location.state.comingFrom)
      history.push(location.state.comingFrom);
    else history.push('/products');
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
            <Form.Item label='Item Code'>
              {
                <>
                  {getFieldDecorator('itemcode', {
                    rules: [
                      { required: true, message: 'Item Code is required' },
                    ],
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
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
            <Form.Item label='Product Type'>
              {
                <>
                  {getFieldDecorator('type', {
                    initialValue: null,
                  })(<ProductTypeDropdown />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Vendor Name'>
              {
                <>
                  {getFieldDecorator('vendname', {
                    rules: [{ required: true, message: 'Vendor is required' }],
                    initialValue: '',
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Unit'>
              {
                <>
                  {getFieldDecorator('unit', {
                    rules: [{ required: true, message: 'Unit is required' }],
                    initialValue: null,
                  })(<UnitDropdown />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Price'>
              {
                <>
                  {getFieldDecorator('price', {
                    rules: [{ required: true, message: 'Price is required' }],
                    initialValue: 0.0,
                  })(
                    <InputNumber min={0} style={{ width: '100%' }} step={2} />
                  )}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='UPC'>
              {
                <>
                  {getFieldDecorator('upc', {
                    initialValue: null,
                  })(<InputNumber style={{ width: '100%' }} />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Location'>
              {
                <>
                  {getFieldDecorator('location', {
                    rules: [
                      { required: true, message: 'Location is required' },
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
            <Form.Item label='Description'>
              {
                <>
                  {getFieldDecorator('description', {
                    initialValue: null,
                  })(<TextArea rows={4} maxLength={1000} />)}
                </>
              }
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Manufacturer'>
              {
                <>
                  {getFieldDecorator('manufacturer', {
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Brand'>
              {
                <>
                  {getFieldDecorator('brand', {
                    initialValue: null,
                  })(<Input />)}
                </>
              }
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Form.Item label='Quantity'>
              {
                <>
                  {getFieldDecorator('quantity', {
                    initialValue: 0,
                  })(<InputNumber style={{ width: '100%' }} disabled />)}
                </>
              }
            </Form.Item>
          </Col>
        </Row>
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
              {'Add Product'}
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

AddProduct.propTypes = {
  form: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
};

const WrappedAddProduct = Form.create({
  name: 'add_product',
})(AddProduct);

export default WrappedAddProduct;
