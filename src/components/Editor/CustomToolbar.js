import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Modal, Upload, message } from 'antd';
import { fetchUptoken } from '../../services/cibuci';
import { qiniuUrl, generateContentKey } from '../../utils/tools';

const Dragger = Upload.Dragger;

const styles = {
  split: {
    display: 'inline-block',
    margin: '5px 10px',
    float: 'left',
    height: '14px',
    width: '1px',
    backgroundColor: '#ccc',
  },
};

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
    const { resource, id } = this.props;
    const toolbarId = (id ? `toolbar-${id}` : 'toolbar');
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
          const key = generateContentKey(resource);

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
        // if (status !== 'uploading') {
        //
        // }
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
      <div id={toolbarId}>
        <button className="ql-header" value="1" />
        <button className="ql-header" value="2" />
        <div style={styles.split} />
        <button className="ql-bold" />
        <button className="ql-italic" />
        <div style={styles.split} />
        <button className="ql-blockquote" />
        <button className="ql-list" value="ordered" />
        <button className="ql-list" value="bullet" />
        <div style={styles.split} />
        <button className="ql-link" />
        <button onClick={this.showModal}>
          <Icon type="picture" style={{ fontWeight: 'bold', fontSize: 16, lineHeight: 1.2 }} />
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
  resource: PropTypes.string.isRequired,
  id: PropTypes.string,
};

export default CustomToolbar;
