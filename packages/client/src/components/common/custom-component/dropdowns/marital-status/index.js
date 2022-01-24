/* eslint-disable no-console */
import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const MartialStatus = (props) => {
  return (
    <Select
      {...props}
      showSearch
      style={{ width: '100%' }}
      placeholder='Martial Status'
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
        Single
      </Option>
      <Option value='2' key='2'>
        Married
      </Option>
      <Option value='3' key='3'>
        Divorced
      </Option>
      <Option value='4' key='4'>
        Seperated
      </Option>
      <Option value='5' key='5'>
        Widowed
      </Option>
    </Select>
  );
};

export default MartialStatus;
