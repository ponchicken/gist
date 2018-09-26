import React, { Component } from 'react'
import { connect } from 'react-redux'

import GistContent from './GistContent'

import {
  // fetchGistFile,
  changeGist,
  fileAdd
} from '../actions/gist'

class Gist extends Component {

  displayGist = () => {
    let {
      gists
    } = this.props
    if (!gists || !gists.active)
      return 'no active gist'
    else {
      return <GistContent updateGist={this.props.onUpdateGist}/>
    }
  }

  handleKeyboard = (e) => {
    if (e.ctrlKey || e.metaKey) {
      switch (String.fromCharCode(e.which).toLowerCase()) {
        case 's':
          this.props.onUpdateGist(this.props.gists.active)(e)
          break;
        default:
          break;
      }
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyboard)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyboard);
  }

  render() {
    return (
      <div>
        { this.displayGist() }
      </div>
    )
  }
}

const mapState = ({ gists }) => ({
  gists
})

const mapDispatch = dispatch => ({
  onUpdateGist: gist => e => {
    if (e) e.preventDefault()
    dispatch(changeGist(gist))
  },
  onFileAdd: (gist) => {
    dispatch(fileAdd(gist))
  }
})

export default connect(mapState, mapDispatch)(Gist)