import React from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer>
      <p>Copyright &copy; 2022 Folio3.</p>
      <ul className='footerLinks'>
        <li>
          <Link to='/user-guide'>User Guide</Link>
        </li>
        <li>
          <Link to='/faq'>FAQ</Link>
        </li>
        <li>
          <Link to='/terms-conditions'>Terms &amp; Conditions</Link>
        </li>
        <li>
          <Link to='/privacy-policy'>Privacy Policy</Link>
        </li>
      </ul>
    </Footer>
  );
};

export default AppFooter;
