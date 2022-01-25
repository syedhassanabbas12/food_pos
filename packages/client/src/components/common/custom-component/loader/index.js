import React from 'react';
import { Spin } from 'antd';

const Loader = () => {
  return <div className='app-loader'>{<Spin />}</div>;
};

export default Loader;
