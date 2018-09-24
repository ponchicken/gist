import React, {Component} from 'react'
import GistFile from './GistFile'

export default class GistData extends Component {
  constructor(props) {
    super(props)
    // ({ gist, updateGist, changeFileData, getFileData, fileAdd })
    this.state = {
      gist: this.props.gist
    }
  }

  getFiles () {
    let gist = this.props.gist
    const result = Object.keys(gist.files).map((filename, i) => {
      return <GistFile 
        key={i}  
        files={gist.files}
        filename={filename}
        fileRemove={this.onFileRemove(gist)}
      />
    })
    return result
  }

  onFileAdd = gist => e => {
    this.props.fileAdd(gist)
    let newEl = document.querySelector('.gist-file-name[value="new"]')
    if (newEl) newEl.focus()
  }

  onFileRemove = gist => filename => {
    this.props.fileRemove(gist, filename)
  }

  render() {
    let gist = this.props.gist
    return (
      <div className="gist">
        <h3>{gist.description}</h3>
        <div>
          {this.getFiles()}
        </div>
        <div className="gist-actions">
          <button className="btn" onClick={this.onFileAdd(gist)}>Add file</button>
          <button className="btn gist-submit" onClick={this.props.updateGist(gist)}>Submit</button>
        </div>
      </div>
    )
  }

}
