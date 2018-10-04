import React, { Component } from 'react'
import { connect } from 'react-redux'
import GistFile from '../components/GistFile'

import {
  fileRename,
  fileRemove,
  fileAdd,
  fileContentChange,
  gistDelete
} from '../actions/gist'

class GistContent extends Component {


  getFiles () {
    let gist = this.props.gist
    if (!gist.description) return <div>no content</div>
    return Object.keys(gist.files).map((filename, i) => {

      let file = gist.files[filename]

      if (file === null) {
        return <div key={filename} className="removed" title={`${filename} removed`}></div>
      } else {
        let { onFileRename, onFileRemove, onFileContentChange } = this.props
        return <GistFile 
          key={filename}  {...{ file, filename, onFileRename, onFileRemove, onFileContentChange } }
        />
      }
    })
  }

  render() {
    let gist = this.props.gist
    return (
      <div className="gist">
        <h3>{gist.description} {gist.deleted ? '--removed--': ''}</h3>
        <button className="btn" onClick={this.props.onGistDelete(gist.id)}>remove gist</button>
        <div className="gist-files" ref="files">
          {this.getFiles()}
        </div>
        <div className="gist-actions">
          <button 
            className="btn"
            onClick={this.props.onFileAdd}
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
  onFileAdd: (e) => {
    dispatch(fileAdd())
  },
  onFileContentChange: filename => content => {
    dispatch(fileContentChange(filename, content))
  },
  onGistDelete: id => e => {
    dispatch(gistDelete(id))
  }
})

export default connect(mapState, mapDispatch)(GistContent)