import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const Status = (props) => {
  return (
    <Select
      {...props}
      showSearch
      style={{ width: '100%' }}
      placeholder='Status'
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
        Open
      </Option>
      <Option value='2' key='2'>
        Closed
      </Option>
      <Option value='3' key='3'>
        Paid
      </Option>
    </Select>
  );
};

export default Status;
