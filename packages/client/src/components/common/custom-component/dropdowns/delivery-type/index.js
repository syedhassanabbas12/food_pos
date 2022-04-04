/* eslint-disable no-console */
import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const DeliveryType = (props) => {
  return (
    <Select
      {...props}
      showSearch
      style={{ width: '100%' }}
      placeholder='Delivery Type'
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
        Dine in
      </Option>
      <Option value='2' key='2'>
        Take Away
      </Option>
      <Option value='3' key='3'>
        Delivery
      </Option>
    </Select>
  );
};

export default DeliveryType;
