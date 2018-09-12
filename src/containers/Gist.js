import React, { Component } from 'react'
import { connect } from 'react-redux'

import GistData from '../components/GistData'

import {
  fetchGistFile,
  updateGist
} from '../actions/gist'


class Gist extends Component {

  displayGist = () => {
    let {
      gists
    } = this.props
    if (!gists.active)
      return 'no active gist'
    else {
      let gist = gists.data.find(item => item.id === gists.active)
      return <GistData gist={gist} updateGist={this.props.onUpdateGist} />
    }
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
  loadFile: (data) => e => {
    dispatch(fetchGistFile(data))
  },
  onUpdateGist: (gist) => e => {
    if (e) e.preventDefault()
    dispatch(updateGist(gist))
  }
})

export default connect(mapState, mapDispatch)(Gist)