import React, { Component } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

class HtmlEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
  }

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(
              draftToHtml(convertToRaw(editorState.getCurrentContent()))
            );
          }}
        >
          submit
        </button>
      </div>
    );
  }
}
export default HtmlEditor;
