import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const Nationality = (props) => {
  return (
    <Select
      {...props}
      showSearch
      style={{ width: '100%' }}
      placeholder='Nationality'
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
        Local
      </Option>
      <Option value='2' key='2'>
        Expact
      </Option>
    </Select>
  );
};

export default Nationality;
