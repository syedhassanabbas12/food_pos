/* eslint-disable no-console */
import React, { useState } from 'react';
import { Select } from 'antd';

const { Option } = Select;
const OPTIONS = ['ADD', 'VIEW', 'LIST', 'UPDATE', 'DELETE'];

const Permission = (props) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

  const handleChange = (selectedItems) => {
    setSelectedItems(selectedItems);
  };

  return (
    <Select
      {...props}
      mode='multiple'
      style={{ width: '100%' }}
      placeholder='Permission'
      value={selectedItems}
      onChange={handleChange}
    >
      {filteredOptions.map((item) => (
        <Option key={item} value={item}>
          {item}
        </Option>
      ))}
    </Select>
  );
};

export default Permission;
