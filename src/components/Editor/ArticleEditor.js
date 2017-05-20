import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Button, Input } from 'antd';
import ReactQuill from 'react-quill';
import CustomToolbar from './CustomToolbar';

class ArticleEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
    };
    this.quillRef = null;
    this.reactQuillRef = null;
    this.handleTitleChange = this.handleTitleChange.bind(this);
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
    const { content, title } = this.state;
    this.props.onSave({ content, title });
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
    return (
      <div>
        <div>
          <Input
            size="large"
            style={{ padding: '1.4rem 1rem', border: 'none', fontSize: 16 }}
            placeholder="请输入标题"
            onChange={this.handleTitleChange}
            value={this.state.title}
          />
        </div>
        <div>
          <CustomToolbar resource="article" onImageUploaded={this.handleImageUploaded} />
          <ReactQuill
            ref={(el) => { this.reactQuillRef = el; }}
            theme={'snow'}
            onChange={this.handleChange}
            modules={ArticleEditor.modules}
            formats={ArticleEditor.formats}
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
ArticleEditor.modules = {};
ArticleEditor.modules.toolbar = {
  container: '#toolbar',
};

/*
 * Quill editor formats
 * See http://quilljs.com/docs/formats/
 */
ArticleEditor.formats = [
  'bold', 'italic', 'blockquote', 'header',
  'list', 'direction', 'link', 'image',
];

ArticleEditor.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default connect()(ArticleEditor);
