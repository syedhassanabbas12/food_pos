import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const Department = (props) => {
  return (
    <Select
      {...props}
      showSearch
      style={{ width: '100%' }}
      placeholder='Department'
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
        Department 1
      </Option>
      <Option value='2' key='2'>
        Department 2
      </Option>
      <Option value='3' key='3'>
        Department 3
      </Option>
    </Select>
  );
};

export default Department;
