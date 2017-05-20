import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Input, Select, Button } from 'antd';
import ReactQuill from 'react-quill';
import CustomToolbar from './CustomToolbar';

const Option = Select.Option;

class TopicEditor extends React.Component {
  constructor(props) {
    super(props);

    const { edit } = props;
    if (edit) {
      this.state = {
        content: edit.content,
        tab: edit.tab,
        title: edit.title,
      };
    } else {
      this.state = {
        content: '',
        tab: 'share',
        title: '',
      };
    }

    this.quillRef = null;
    this.reactQuillRef = null;
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.attachQuillRefs = this.attachQuillRefs.bind(this);
    this.handleImageUploaded = this.handleImageUploaded.bind(this);
  }

  componentDidMount() {
    this.attachQuillRefs();
  }

  componentWillReceiveProps(nextProps) {
    const { edit } = nextProps;
    if (edit) {
      this.setState({
        title: edit.title,
        tab: edit.tab,
        content: edit.content,
      });
    }
  }

  componentDidUpdate() {
    this.attachQuillRefs();
  }

  attachQuillRefs() {
    // Ensure React-Quill reference is available:
    if (typeof this.reactQuillRef.getEditor !== 'function') return;
    // Skip if Quill reference is defined:
    if (this.quillRef != null) return;

    const quillRef = this.reactQuillRef.getEditor();
    if (quillRef != null) this.quillRef = quillRef;
  }

  handleClick(e) {
    e.preventDefault();

    // TODO: add some validate.
    const { content, title, tab } = this.state;
    this.props.onSave({ content, title, tab });
  }

  handleChange(html) {
    this.setState({ content: html });
  }

  handleTabChange(value) {
    this.setState({ tab: value });
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleImageUploaded(url) {
    this.reactQuillRef.focus();
    const cursorPosition = this.quillRef.getSelection().index;
    this.quillRef.insertEmbed(cursorPosition, 'image', url);
  }

  render() {
    const saveButtonName = this.props.saveButtonName || '发布';

    const selectBefore = (
      <Select
        defaultValue="share"
        value={this.state.tab}
        style={{ width: 100, fontSize: 16 }}
        onChange={this.handleTabChange}
      >
        <Option value="share">分享</Option>
        <Option value="ask">问答</Option>
      </Select>
    );

    return (
      <div>
        <div>
          <Input
            size="large"
            style={{ padding: '1.4rem 1rem', border: 'none', fontSize: 16 }}
            addonBefore={selectBefore}
            placeholder="请输入标题"
            onChange={this.handleTitleChange}
            value={this.state.title}
          />
        </div>
        <div>
          <CustomToolbar resource="topic" onImageUploaded={this.handleImageUploaded} />
          <ReactQuill
            ref={(el) => { this.reactQuillRef = el; }}
            theme={'snow'}
            onChange={this.handleChange}
            modules={TopicEditor.modules}
            formats={TopicEditor.formats}
            style={{ height: 500 }}
            value={this.state.content}
          />
        </div>
        <div style={{ padding: '1.5rem', textAlign: 'right' }}>
          <Button onClick={this.handleClick} type="primary" size="large">{saveButtonName}</Button>
        </div>
      </div>
    );
  }
}

/*
 * Quill modules to attach to editor
 * See http://quilljs.com/docs/modules/ for complete options
 */
TopicEditor.modules = {};
TopicEditor.modules.toolbar = {
  container: '#toolbar',
};

/*
 * Quill editor formats
 * See http://quilljs.com/docs/formats/
 */
TopicEditor.formats = [
  'bold', 'italic', 'blockquote', 'header',
  'list', 'direction', 'link', 'image',
];

TopicEditor.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default connect()(TopicEditor);
