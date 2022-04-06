import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const Role = (props) => {
  return (
    <Select
      {...props}
      showSearch
      style={{ width: '100%' }}
      placeholder='Role'
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
        Role 0
      </Option>
      <Option value='1' key='1'>
        Role 1
      </Option>
      <Option value='2' key='2'>
        Role 2
      </Option>
      <Option value='3' key='3'>
        Role 3
      </Option>
    </Select>
  );
};

export default Role;
