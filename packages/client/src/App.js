import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router/index';
import 'antd/dist/antd.css';
import './styles/style.less';
import * as BizChart from 'bizcharts';
import BizTheme from './styles/BizTheme';
import CONSTANTS from './constants/app-constants';
const { ASSETS } = CONSTANTS;
require(`./assets/${ASSETS.FAVICON}`);

BizChart.setTheme(BizTheme);

function App() {
  return (
    <div className='hrms-style'>
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
