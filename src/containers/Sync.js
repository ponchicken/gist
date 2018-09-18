import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchUser
} from '../actions/user'
import { fetchGists, updateGists } from '../actions/gists';


class Sync extends Component {

  componentDidMount() {
    // this.props.onFetchData()
  }

  render() {
    return (
      <div>
        <button onClick={this.props.onFetchData}>pull</button>     
        <button onClick={this.props.onUpdateGists(this.props.gists)}>push</button>
        { this.props.gists.patching ? 'updating gists on github' : ''}      
      </div>
    )
  }
}

const mapState = ({ gists }) => ({
  gists
})

const mapDispatch = dispatch => ({
  onFetchData: () => {
    fetchUser(dispatch)
    fetchGists(dispatch)
  },
  onUpdateGists: (gists) => () => {
    dispatch(updateGists(gists))
  }
})

export default connect(mapState, mapDispatch)(Sync)