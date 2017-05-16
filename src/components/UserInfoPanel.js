import React from 'react';
import { connect } from 'dva';
import UserInfoForm from './Form/UserInfoForm';

function UserInfoPanel(props) {
  const { user } = props;

  return (
    <div style={{ backgroundColor: 'white', padding: '1rem' }}>
      <UserInfoForm />
    </div>
  );
}

UserInfoPanel.propTypes = {
};

function mapStateToProps(state) {
  return {
    user: state.app.user,
  };
}

export default connect(mapStateToProps)(UserInfoPanel);
