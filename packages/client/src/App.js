import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router/index';
import 'antd/dist/antd.css';
import './styles/style.less';
import * as BizChart from 'bizcharts';
import BizTheme from './styles/BizTheme';
require('./assets/favicon.ico');

BizChart.setTheme(BizTheme);

function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
