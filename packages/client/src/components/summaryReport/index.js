import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Table,
  Icon,
  Button,
  Card,
  Collapse,
  Form,
  Row,
  Col,
  DatePicker,
} from 'antd';
import Styles from '../../styles/css-in-js';
import EntityDropdown from '../common/custom-component/dropdowns/entity';
import TransactionTypeDropdown from '../common/custom-component/dropdowns/transaction-type';

const { Panel } = Collapse;
const { RangePicker } = DatePicker;

const data = [];
const columns = [
  {
    title: 'Id',
    dataIndex: 'action',
    render: (text, record) => {
      return (
        <span>
          <Link to={`/${record.id}`}>View</Link>
        </span>
      );
    },
  },
  {
    title: 'Transaction Type',
    dataIndex: 'type',
  },
  {
    title: 'Entity',
    dataIndex: 'entity',
  },
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
  },
];

function SummaryReport(props) {
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
                <Form.Item label='Transaction Type'>
                  <>
                    {getFieldDecorator('status', {
                      initialValue: null,
                    })(<TransactionTypeDropdown />)}
                  </>
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6}>
                <Form.Item label='Entity'>
                  <>
                    {getFieldDecorator('status', {
                      initialValue: null,
                    })(<EntityDropdown />)}
                  </>
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6}>
                <Form.Item label='Date'>
                  <>
                    {getFieldDecorator('datetime', {
                      initialValue: null,
                    })(<RangePicker showTime />)}
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
            {'Summary Report'}
          </h3>
        </span>
      }
      bordered={false}
      extra={
        <Button
          style={{ marginLeft: 8 }}
          className='ant-btn ant-btn-primary btn-add'
          onClick={() => {
            console.log('click download report');
          }}
        >
          Download Report
        </Button>
      }
    >
      <div>
        {renderAdvanceSearch()}

        <Table
          columns={columns}
          rowKey={(record) => record.id}
          dataSource={data}
          loading={false}
          onChange={() => {
            console.log('Table Changed');
          }}
          pagination={false}
          bordered
          footer={() => 'Footer'}
        />
      </div>
    </Card>
  );
}

SummaryReport.propTypes = {
  form: PropTypes.object,
};

const WrappedSummaryReport = Form.create({
  name: 'summary_report',
})(SummaryReport);

export default WrappedSummaryReport;
