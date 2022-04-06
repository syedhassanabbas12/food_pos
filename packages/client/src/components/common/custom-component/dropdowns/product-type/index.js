import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const ProductType = (props) => {
  return (
    <Select
      {...props}
      showSearch
      style={{ width: '100%' }}
      placeholder='Product Type'
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
        Inventory
      </Option>
      <Option value='1' key='1'>
        Non Inventory
      </Option>
      <Option value='2' key='2'>
        Charge Item
      </Option>
      <Option value='3' key='3'>
        Service Item
      </Option>
      <Option value='4' key='4'>
        Discount Item
      </Option>
      <Option value='5' key='5'>
        Kit Item
      </Option>
    </Select>
  );
};

export default ProductType;
