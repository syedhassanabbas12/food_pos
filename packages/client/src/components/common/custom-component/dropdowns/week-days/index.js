import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const daysList = [
  { name: 'Monday', value: '0' },
  { name: 'Tuesday', value: '1' },
  { name: 'Wednesday', value: '2' },
  { name: 'Thursday', value: '3' },
  { name: 'Friday', value: '4' },
  { name: 'Saturday', value: '5' },
  { name: 'Sunday', value: '6' },
];

const WeekDays = (props) => {
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
      {daysList.map((elem) => (
        <Option value={elem.value} key={elem.value}>
          {elem.name}
        </Option>
      ))}
    </Select>
  );
};

export default WeekDays;
