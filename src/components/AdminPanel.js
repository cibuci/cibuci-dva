import React from 'react';
import { Button } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { isAdmin } from '../utils/tools';
import Panel from './Common/Panel';

function AdminPanel(props) {
  const { user } = props;
  if (!user) return null;
  if (!isAdmin(user)) return null;

  return (
    <div style={{ backgroundColor: 'white', marginTop: '1.2rem' }}>
      <Panel title="仅管理员可见" icon="rocket">
        <div style={{ padding: '1.2rem' }}>
          <Link to="/article/add">
            <Button type="primary" size="large">发布新话题</Button>
          </Link>
        </div>
      </Panel>
    </div>
  );
}

AdminPanel.propTypes = {
};

function mapStateToProps(state) {
  return {
    user: state.app.user,
  };
}

export default connect(mapStateToProps)(AdminPanel);
