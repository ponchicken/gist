import React, {Component} from 'react'
import GistFile from './GistFile'
import {parseTitle} from '../helpers/parseTitle'

export default class GistData extends Component {
  constructor(props) {
    super(props)
    // ({ gist, updateGist, changeFileData, getFileData, fileAdd })
    this.state = this.getDefaultState()
  }

  componentDidUpdate() {
    if (this.props.gist.id !== this.state.gist.id){
      this.setState(this.getDefaultState())
    }
  }

  getDefaultState = () => ({
    gist: this.props.gist
  })

  getFiles () {
    let gist = this.state.gist
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

  onTitleChange = e => {
    this.setState({
      gist: {
        ...this.state.gist,
        description: e.target.value
      }
    })
  }

  onTitleSubmit = e => {
    // this.props.updateGist(this.state.gist)
  }

  render() {
    let gist = this.props.gist
    let titleObj = parseTitle(gist.description)
    return (
      <div className="gist">
        <h3>{titleObj.title}</h3>
        <div>{titleObj.description}</div>
        <form onSubmit={this.onTitleSubmit}>
        <div>
          <textarea 
            name="" 
            id="" 
            cols="30" 
            rows="10" 
            value={this.state.gist.description}
            onChange={this.onTitleChange}></textarea>
          </div>
        </form>
        <div>
          {this.getFiles()}
        </div>
        <div className="gist-actions">
          <button className="btn" onClick={this.onFileAdd(gist)}>Add file</button>
          <button className="btn gist-submit" onClick={this.props.updateGist(this.state.gist, this.props.getInitialGist)}>Submit</button>
        </div>
      </div>
    )
  }

}
