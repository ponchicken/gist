import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchUser
} from '../actions/user'
import { fetchGists } from '../actions/gists';


class Sync extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.onFetchData}>sync</button>       
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  // onFetchUser: () => fetchUser(dispatch),
  onFetchData: () => {
    fetchUser(dispatch)
    fetchGists(dispatch)
  }
})

export default connect(null, mapDispatch)(Sync)