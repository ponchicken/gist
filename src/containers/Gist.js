import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  fetchGistFile
} from '../actions/gist'


class Gist extends Component {

  displayGist = () => {
    let { gist } = this.props
    if (!gist.id) {
      return 'no active gist'
    } else {
      return (
        <div>
          <h3>{gist.description}</h3>
          <ul>{Object.keys(gist.files).map(name => {
            let file = gist.files[name]
            return <li key={name} onClick={this.props.getFile(file)}>{name}</li>
          })}</ul>
        </div>
      )
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

const mapState = ({ gist }) => ({
  gist
})

const mapDispatch = dispatch => ({
  getFile: (file) => e => {
    dispatch(fetchGistFile(file))
  }
})

export default connect(mapState, mapDispatch)(Gist)