import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const BloodGroup = (props) => {
  const data = [
    {
      value: '0',
      text: 'A+',
    },
    {
      value: '1',
      text: 'O+',
    },
    {
      value: '2',
      text: 'B+',
    },
    {
      value: '3',
      text: 'AB+',
    },
    {
      value: '4',
      text: 'A-',
    },
    {
      value: '5',
      text: 'O-',
    },
    {
      value: '6',
      text: 'B-',
    },
    {
      value: '7',
      text: 'AB-',
    },
  ];
  return (
    <Select
      {...props}
      showSearch
      style={{ width: '100%' }}
      placeholder='BloodGroup'
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
      {data.map((item) => {
        return (
          <Option key={item.value} value={item.value}>
            {item.text}
          </Option>
        );
      })}
    </Select>
  );
};

export default BloodGroup;
