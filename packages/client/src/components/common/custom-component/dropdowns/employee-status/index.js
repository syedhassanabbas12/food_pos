import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const EmployeeStatus = (props) => {
  return (
    <Select
      {...props}
      showSearch
      style={{ width: '100%' }}
      placeholder='Employee Status'
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
        Active
      </Option>
      <Option value='2' key='2'>
        Resignation
      </Option>
      <Option value='3' key='3'>
        Retirement
      </Option>
      <Option value='4' key='4'>
        Termination
      </Option>
      <Option value='5' key='5'>
        Death
      </Option>
      <Option value='6' key='6'>
        Not returned from Leaved (NRFL)
      </Option>
    </Select>
  );
};

export default EmployeeStatus;
