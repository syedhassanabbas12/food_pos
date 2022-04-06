import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const PaymentMode = (props) => {
  return (
    <Select
      {...props}
      showSearch
      style={{ width: '100%' }}
      placeholder='Payment Mode'
      optionFilterProp='children'
      allowClear
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      filterSort={(optionA, optionB) =>
        optionA.children
          .toLowerCase()
          .localeCompare(optionB.children.toLowerCase())
      }
    >
      <Option value='1' key='1'>
        Cash
      </Option>
      <Option value='2' key='2'>
        Card
      </Option>
      <Option value='3' key='3'>
        Online Transfer
      </Option>
      <Option value='4' key='4'>
        Cheque
      </Option>
    </Select>
  );
};

export default PaymentMode;
