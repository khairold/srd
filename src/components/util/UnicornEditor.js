import React, { Component } from 'react';
// import Editor from 'draft-js-plugins-editor';
// import createHashtagPlugin from 'draft-js-hashtag-plugin';
// import createLinkifyPlugin from 'draft-js-linkify-plugin';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-editor'

// const hashtagPlugin = createHashtagPlugin();
// const linkifyPlugin = createLinkifyPlugin();
//
// const plugins = [
//   hashtagPlugin,
//   linkifyPlugin,
// ];

class UnicornEditor extends Component {

  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }
  render() {
    const {editorState} = this.state;
    return <Editor editorState={editorState} onChange={this.onChange} />;
  }

}

export default UnicornEditor
