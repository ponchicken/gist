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
      console.log('GistData',filename)
      return <GistFile 
        key={i}  
        files={gist.files}
        filename={filename}
      />
    })
    return result
  }

  onFileAdd = gist => e => {
    console.log('Adding file')
    this.props.fileAdd(gist)
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
