import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  newGist
} from '../actions/gist'

class AddGist extends Component {
  render() {
    return (
      <div>
        <button className="btn" onClick={this.props.onGistAdd}> new gist +</button>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  onGistAdd: e => dispatch(newGist())
})

export default connect(null, mapDispatch)(AddGist)