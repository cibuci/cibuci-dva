import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Button } from 'antd';
import ReactQuill from 'react-quill';
import CustomToolbar from './CustomToolbar';

class CommentEditor extends React.Component {
  constructor(props) {
    super(props);

    const { edit } = props;
    if (edit) {
      this.state = {
        content: edit.content,
      };
    } else {
      this.state = {
        content: '',
      };
    }

    this.quillRef = null;
    this.reactQuillRef = null;
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
    const { content } = this.state;
    this.props.onSave({ content });

    // clean the textarea.
    this.quillRef.setText('');
  }

  handleChange(html) {
    this.setState({ content: html });
  }

  handleImageUploaded(url) {
    this.reactQuillRef.focus();
    const cursorPosition = this.quillRef.getSelection().index;
    this.quillRef.insertEmbed(cursorPosition, 'image', url);
  }

  render() {
    const saveButtonName = this.props.saveButtonName || '回复';
    const id = this.props.id;
    const modules = {
      toolbar: {
        container: (id ? `#toolbar-${id}` : '#toolbar'),
      },
    };

    return (
      <div>
        <div>
          <CustomToolbar
            id={this.props.id}
            resource="article"
            onImageUploaded={this.handleImageUploaded}
          />
          <ReactQuill
            ref={(el) => { this.reactQuillRef = el; }}
            theme={'snow'}
            onChange={this.handleChange}
            modules={modules}
            formats={CommentEditor.formats}
            style={{ height: 120 }}
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
 * Quill editor formats
 * See http://quilljs.com/docs/formats/
 */
CommentEditor.formats = [
  'bold', 'italic', 'blockquote', 'header',
  'list', 'direction', 'link', 'image',
];

CommentEditor.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default connect()(CommentEditor);
