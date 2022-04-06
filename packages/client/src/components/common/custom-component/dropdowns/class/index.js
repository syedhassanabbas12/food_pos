import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const Classs = (props) => {
  return (
    <Select
      {...props}
      showSearch
      style={{ width: '100%' }}
      placeholder='Type to Search'
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
      <Option value='1'>Class 1</Option>
      <Option value='2'>Class 2</Option>
      <Option value='3'>Class 3</Option>
    </Select>
  );
};

export default Classs;
