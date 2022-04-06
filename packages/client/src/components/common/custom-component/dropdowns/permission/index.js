import React, { useState } from 'react';
import { Select } from 'antd';

const { Option } = Select;

const Permission = (props) => {
  const [OPTIONS] = useState(['ADD', 'VIEW', 'LIST', 'UPDATE', 'DELETE']);

  return (
    <Select
      {...props}
      showSearch
      mode='multiple'
      style={{ width: '100%' }}
      placeholder={props.placeholder ? props.placeholder : 'Select Permission'}
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
      {OPTIONS.map((item) => {
        return (
          <Option key={item} value={item}>
            {item}
          </Option>
        );
      })}
    </Select>
  );
};

export default Permission;
