import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Editor from 'react-simple-code-editor'
// import Prism from 'prismjs'

import {
  fileRename,
  fileRemove
} from '../actions/gist'

class GistContent extends Component {


  getFiles () {
    let result
    let gist = this.props.gists.active
    if (!gist.id) result = <div>no content</div>
    result = Object.keys(gist.files).map((filename, i) => {
      if (gist.files[filename] === null) {
        return <div key={filename}>{filename} removed</div>
      } else {
        return (
          <div className="gist-file" key={filename}>
            <div className="gist-file-top">
              <input
                className="gist-file-name"  
                value={gist.files[filename].filename} 
                onChange={this.props.onFileRename(gist, filename)}
              />
              <button 
                className="gist-file-remove btn"
                title="remove file"
                onClick={this.props.onFileRemove(gist, filename)}
              >remove file</button>
            </div>
          </div>
        )
      }
    })
    return result
  }

  render() {
    let gist = this.props.gists.active
    return (
      <div className="gist">
        <h3>{this.props.gists.active.description}</h3>
        <div className="gist-files">
          {this.getFiles()}
        </div>
        <div className="gist-actions">
          <button 
            className="btn"
            // onClick={this.onFileAdd(gist)}
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

const mapState = ({ gists }) => ({
  gists
})

const mapDispatch = dispatch => ({
  onFileRemove: (gist, target) => e => {
    dispatch(fileRemove(gist, target))
  },
  onFileRename: (gist, target) => e => {
    dispatch(fileRename(gist, target, e.target.value))
  }
})

export default connect(mapState, mapDispatch)(GistContent)