import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router/index';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
