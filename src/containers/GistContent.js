import React, { Component } from 'react'
import { connect } from 'react-redux'
import Editor from 'react-simple-code-editor'
import Prism from 'prismjs'

import {
  fileRename,
  fileRemove,
  fileAdd,
  fileContentChange
} from '../actions/gist'

class GistContent extends Component {

  fileAdd = e => {
    setTimeout(() => {
      let index = this.refs.files.childNodes.length - 1
      this.refs[`file-${index}`].focus()
    }, 50)
    this.props.onFileAdd()
  }

  getFiles () {
    let gist = this.props.gist
    if (!gist.id) return <div>no content</div>
    return Object.keys(gist.files).map((filename, i) => {

      let file = gist.files[filename]
      
      if (file === null) {
        return <div key={filename} className="removed" title={`${filename} removed`}></div>
      } else {
        let filelang = (file.language) ? file.language.toLowerCase() : 'clike'
        let lang = (Prism.languages.hasOwnProperty(filelang)) ? filelang : 'clike'
        return (
          <div className="gist-file" key={filename}>
            <div className="gist-file-top">
              <input
                className="gist-file-name"
                data-name={filename}
                ref={`file-${i}`}
                value={file.filename}
                onChange={this.props.onFileRename(filename)}
              />
              <button 
                className="gist-file-remove btn"
                title="remove file"
                onClick={this.props.onFileRemove(filename)}
              >remove file</button>
            </div>
            <Editor
              className="gist-editor"
              value={file.content}
              onValueChange={this.props.onFileContentChange(filename)} 
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
    })
  }

  render() {
    let gist = this.props.gist
    return (
      <div className="gist">
        <h3>{gist.description}</h3>
        <div className="gist-files" ref="files">
          {this.getFiles()}
        </div>
        <div className="gist-actions">
          <button 
            className="btn"
            onClick={this.fileAdd}
          >Add file</button>
          <button 
            className="btn gist-submit" 
            onClick={this.props.updateGist(gist)}
          >Submit</button>
        </div>
      </div>
    )
  }
}

const mapState = ({ gists, gist }) => ({
  gists, gist
})

const mapDispatch = dispatch => ({
  onFileRemove: (target) => e => {
    dispatch(fileRemove(target))
  },
  onFileRename: (target) => e => {
    dispatch(fileRename(target, e.target.value))
  },
  onFileAdd: () => {
    dispatch(fileAdd())
  },
  onFileContentChange: filename => content => {
    console.log(filename, content)
    dispatch(fileContentChange(filename, content))
  }
})

export default connect(mapState, mapDispatch)(GistContent)