import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const Desination = (props) => {
  return (
    <Select
      {...props}
      showSearch
      style={{ width: '100%' }}
      placeholder='Desination'
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
        Desination 1
      </Option>
      <Option value='2' key='2'>
        Desination 2
      </Option>
      <Option value='3' key='3'>
        Desination 3
      </Option>
    </Select>
  );
};

export default Desination;
