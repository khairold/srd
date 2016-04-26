import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState, ContentState, convertToRaw, convertFromRaw } from 'draft-js';

class PlainEditor extends React.Component {
  constructor(props) {
    super(props);

    if(props.value) {
      // const blocks = convertFromRaw(props.value)
      this.state = {
        editorState: EditorState.createWithContent(ContentState.createFromText(props.value)),
        // editorState: EditorState.createWithContent(convertFromRaw(props.value)),
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
      const content = this.state.editorState.getCurrentContent()
      // this.props.onChange(content.getPlainText())
      this.props.onChange(convertToRaw(content))
      // console.log(this.state.editorState.toJS())

      console.log(convertToRaw(content))
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value && !this.state.loaded) {
      this.state = {
        // editorState: EditorState.createWithContent(convertFromRaw(nextProps.value)),
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
