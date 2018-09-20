import React, { Component } from 'react'
import Editor from 'react-simple-code-editor'
import Prism from 'prismjs'

export default class GistFile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filename: props.filename,
      content: props.files[this.props.filename].content
    }
  }

  onFilenameChange = (e) => {
    let {
      files
    } = this.props
    let oldName = this.state.filename
    let newName = e.target.value
    this.setState({ filename: newName })
    files[this.state.filename].filename = newName
    files[newName] = files[oldName]
    delete files[oldName]
  }

  onFileContentChange = (content) => {
    let {
      filename,
      files
    } = this.props
    this.setState({ content })
    files[filename].content = content
  }

  render() {
    let {
      files
    } = this.props
    let file = files[this.state.filename]

    let filelang = (file.language) ? file.language.toLowerCase() : 'clike'
    let lang = (Prism.languages.hasOwnProperty(filelang)) ? filelang : 'clike'
    let content = this.state.content || ''

    return (
      <div className="gist-file">
        <input type="text" value={this.state.filename} onChange={this.onFilenameChange}/>
        <Editor
          className="gist-editor"
          value={content}
          onValueChange={this.onFileContentChange} 
          highlight={code => {
            return Prism.highlight(code, Prism.languages[lang])
          }}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14,
          }}
        />
      </div>
    )
  }
}
