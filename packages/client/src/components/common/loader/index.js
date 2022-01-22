import React from "react";
import { Spin } from "antd";
import "./style.scss";

const Loader = (props) => {
  return <div className="app-loader">{props.show && <Spin />}</div>;
};

export default Loader;
