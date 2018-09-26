import React, { Component } from 'react'
import Editor from 'react-simple-code-editor'
import Prism from 'prismjs'

export default class GistFile extends Component {
  constructor(props) {
    super(props)
    this.state = this.getDefaultState()
  }
  
  getDefaultState = () => {
    if (this.props.files[this.props.filename]) {
      return { 
        filename: this.props.filename,
        content: this.props.files[this.props.filename].content,
        files: this.props.files
      }
    } else {
      return null
    }
  }

  componentDidUpdate () {
    if (this.state ) {
      if (!this.props.files[this.state.filename] && this.props.files[this.state.filename] !== null) {
        this.setState(this.getDefaultState())
      }
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
    // files[newName] = files[oldName]
    // delete files[oldName]
  }

  getFilename = () => {
    return this.state.filename
  }

  onFileContentChange = (content) => {
    let {
      files
    } = this.props
    this.setState({ content })
    files[this.state.filename].content = content
  }


  onFileRemove = filename => e => {
    this.props.fileRemove(filename)
  }

  getIG = e => {

  }

  render() {
    let {
      files,
      filename
    } = this.props

    if (! this.state || files[filename] === null) {
      return <div>{filename} removed</div>
    } else if (files[this.state.filename]) {
      let file = files[this.state.filename]
      let filelang = (file.language) ? file.language.toLowerCase() : 'clike'
      let lang = (Prism.languages.hasOwnProperty(filelang)) ? filelang : 'clike'
      let content = this.state.content || ''

      return (
        <div className="gist-file">
          <div className="gist-file-top">
            <input type="text" className="gist-file-name" value={this.getFilename()} onChange={this.onFilenameChange} onClick={this.getIG}/>
            <button className="gist-file-remove btn" title="remove file" onClick={this.onFileRemove(file.filename)}>remove file</button>
          </div>
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

    } else {
      return <div>loading...</div>
    }
  }
}
