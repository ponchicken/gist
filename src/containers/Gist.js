import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  fetchGistFile
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
      return (
        <div>
          <h3>{gist.description}</h3>
          <ul>{Object.keys(gist.files).map(name => {
            return <li key={name}>
              {name}
              <div>
                {gist.files[name].data}
              </div>
            </li>
          })}</ul>
        </div>
      )
    }
  }

  componentDidUpdate() {
    
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
  }
})

export default connect(mapState, mapDispatch)(Gist)