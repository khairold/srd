import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState, ContentState } from 'draft-js';

class PlainEditor extends React.Component {
  constructor(props) {
    super(props);

    if(props.value) {
      this.state = {
        editorState: EditorState.createWithContent(ContentState.createFromText(props.value)),
        loaded: true
      }
    } else {
      this.state = {
        editorState: EditorState.createEmpty(),
        loaded: false
      }
    }

    this.onChange = (editorState) => {
      this.setState({editorState})
      this.props.onChange(editorState.getCurrentContent().getPlainText())
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value && !this.state.loaded) {
      this.state = {
        editorState: EditorState.createWithContent(ContentState.createFromText(nextProps.value)),
        loaded: true
      }
    }

  }

  render() {
    const {editorState} = this.state;
    return <Editor editorState={editorState} onChange={this.onChange} />;
  }
}

export default PlainEditor
