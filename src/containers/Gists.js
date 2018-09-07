import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setActiveGist } from '../actions/gist'

class Gists extends Component {

  displayGists = () => {
    let gists = this.props.gists.data
    if (gists.length) {
      return gists.map(gist => {
        return <button onClick={this.props.setGist(gist)} key={gist.id}>{ gist.description }</button>
      })
    } else {
      return <div>no gists</div>
    }
  }

  render() {
    return (
      <div className="gists-list">
        {this.displayGists()}
      </div>
    )
  }
}

const mapState = ({ gists }) => ({
  gists
})

const mapDispatch = dispatch => ({
  setGist: gist => e => {
    e.preventDefault()
    dispatch(setActiveGist(gist))
  }
})

export default connect(mapState, mapDispatch)(Gists)