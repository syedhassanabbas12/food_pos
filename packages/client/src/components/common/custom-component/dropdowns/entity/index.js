import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const Entity = (props) => {
  return (
    <Select
      {...props}
      showSearch
      style={{ width: '100%' }}
      placeholder='Entity'
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
      <Option value='0' key='0'>
        Customer 1
      </Option>
      <Option value='1' key='1'>
        Customer 2
      </Option>
      <Option value='2' key='2'>
        Vendor 1
      </Option>
      <Option value='3' key='3'>
        Vendor 2
      </Option>
    </Select>
  );
};

export default Entity;
