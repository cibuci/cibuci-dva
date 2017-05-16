import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Upload, message } from 'antd';
import { fetchUptoken } from '../../services/cibuci';
import { qiniuUrl, generateKey } from '../../utils/tools';

import less from './UserInfoForm.less';

const FormItem = Form.Item;

const styles = {
  form: {
  },
  forgot: {
    float: 'right',
  },
};

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 14,
      offset: 6,
    },
  },
};

class UserInfoForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.uploaderRef = null;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.beforeUpload = this.beforeUpload.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { user } = this.props;
    if (!user) return;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const params = {
          id: user.id,
          data: {
            avatarUrl: this.props.user.avatarUrl,
            nickName: values.nickName,
          },
        };

        this.props.dispatch({ type: 'app/usermodify', payload: { params } });
      }
    });
  }

  normFile = (info) => {
    // console.log('Upload event:', e);
    // TODO: add progress.
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      const avatarUrl = qiniuUrl(info.file.response.key);
      this.props.user.avatarUrl = avatarUrl;
    }
  }

  beforeUpload = (file) => {
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('图片请不要超过 2MB!');
    }

    if (isLt2M && this.props.user) {
      const key = generateKey(this.props.user.id);

      const uploaderData = this.uploaderRef.props.data;
      uploaderData.key = key;

      return fetchUptoken(key)
        .then(({ data }) => {
          uploaderData.token = data.token;
        });
    }

    return false;
  }

  render() {
    const { user } = this.props;
    if (!user) return null;

    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} style={styles.form} className="login-form">
        <FormItem
          {...formItemLayout}
          label="用户名"
        >
          <span className="ant-form-text">@{user.username}</span>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="昵称"
        >
          {getFieldDecorator('nickName', {
            rules: [{ required: false, message: '请输入你的用户名!' }],
            initialValue: user.nickName,
          })(
            <Input />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="头像"
        >
          {getFieldDecorator('avatarUrl', {
            getValueFromEvent: this.normFile,
          })(
            <Upload
              className={less['avatar-uploader']}
              name="file"
              ref={(el) => { this.uploaderRef = el; }}
              showUploadList={false}
              action="https://up-z1.qbox.me"
              beforeUpload={this.beforeUpload}
            >
              {
                user.avatarUrl ?
                  <img src={user.avatarUrl} alt="" className={less.avatar} /> :
                  <Icon type="plus" className={less['avatar-uploader-trigger']} />
              }
            </Upload>,
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            更新资料
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedUserInfoForm = Form.create()(UserInfoForm);

function mapStateToProps(state) {
  return {
    user: state.app.user,
  };
}

export default connect(mapStateToProps)(WrappedUserInfoForm);
