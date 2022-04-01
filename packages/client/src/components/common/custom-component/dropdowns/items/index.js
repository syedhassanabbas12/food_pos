/* eslint-disable no-console */
import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const Items = (props) => {
  return (
    <Select
      {...props}
      showSearch
      style={{ width: '100%' }}
      placeholder='Items'
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
        Item 1
      </Option>
      <Option value='2' key='2'>
        Item 2
      </Option>
      <Option value='3' key='3'>
        Item 3
      </Option>
    </Select>
  );
};

export default Items;
