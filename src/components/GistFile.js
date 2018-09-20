import React, { Component } from 'react'
import Editor from 'react-simple-code-editor'
import Prism from 'prismjs'

export default class GistFile extends Component {
  constructor(props) {
    super(props)
    this.state = this.getInitialState()
  }
  
  getInitialState() {
    return { 
      filename: this.props.filename,
      content: this.props.files[this.props.filename].content
    }
  }

  componentDidUpdate () {
    if (this.state.filename !== this.props.filename)
      this.setState(this.getInitialState())
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

  getFilename = () => {
    return this.state.filename
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

    if (file) {
      let filelang = (file.language) ? file.language.toLowerCase() : 'clike'
      let lang = (Prism.languages.hasOwnProperty(filelang)) ? filelang : 'clike'
      let content = this.state.content || ''

      return (
        <div className="gist-file">
          <input type="text" className="gist-file-name" value={this.getFilename()} onChange={this.onFilenameChange}/>
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
