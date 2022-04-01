import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Icon, Form } from 'antd';

function EditProfile() {
  return (
    <Card
      loading={false}
      title={
        <span>
          <h3 className='ant-typography'>
            <Link to='/employees' className='btn-back'>
              <Icon type='arrow-left' />
            </Link>{' '}
            Employee Detail
          </h3>
        </span>
      }
      bordered={false}
    ></Card>
  );
}

EditProfile.propTypes = {
  form: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
};

const WrappedEditProfile = Form.create({
  name: 'edit_profile',
})(EditProfile);

export default WrappedEditProfile;
