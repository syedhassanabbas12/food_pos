/* eslint-disable no-console */
import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const Units = (props) => {
  return (
    <Select
      {...props}
      showSearch
      style={{ width: '100%' }}
      placeholder='Primary Unit'
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
        Unit 1
      </Option>
      <Option value='2' key='2'>
        Unit 2
      </Option>
      <Option value='3' key='3'>
        Unit 3
      </Option>
    </Select>
  );
};

export default Units;
