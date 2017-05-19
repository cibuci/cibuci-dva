import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Modal, Upload, message } from 'antd';
import { fetchUptoken } from '../../services/cibuci';
import { qiniuUrl, generateArticleKey } from '../../utils/tools';

const Dragger = Upload.Dragger;

class CustomToolbar extends React.Component {

  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
      url: '',
    });
  }

  handleOk = () => {
    this.setState({
      visible: false,
    });

    if (this.props.onImageUploaded && this.state.url) {
      this.props.onImageUploaded(this.state.url);
    }
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    const _this = this;
    const props = {
      name: 'file',
      showUploadList: false,
      action: 'https://up-z1.qbox.me',
      beforeUpload(file) {
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('图片请不要超过 2MB!');
        }

        if (isLt2M) {
          const key = generateArticleKey();

          const uploaderData = this.data;
          uploaderData.key = key;

          return fetchUptoken(key)
            .then(({ data }) => {
              uploaderData.token = data.token;
            });
        }

        return false;
      },
      onChange(info) {
        const status = info.file.status;
        if (status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`);
          const avatarUrl = qiniuUrl(info.file.response.key);
          _this.setState({ url: avatarUrl });
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };

    return (
      <div id="toolbar">
        <button className="ql-bold" />
        <button className="ql-italic" />
        <button onClick={this.showModal}>
          <Icon type="picture" />
        </button>
        <Modal
          title="上传图片"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Dragger {...props}>
            {
              this.state.url ? (
                <img src={this.state.url} alt="pic" style={{ maxHeight: '8rem' }} />
              ) : (
                <div style={{ padding: '2rem' }}>
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                  </p>
                  <p className="ant-upload-text">点击或拖拽图片到此处上传。</p>
                </div>
              )
            }
          </Dragger>
        </Modal>
      </div>
    );
  }
}

CustomToolbar.propTypes = {
  onImageUploaded: PropTypes.func,
};

export default CustomToolbar;
