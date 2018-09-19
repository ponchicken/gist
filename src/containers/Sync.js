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
      <div className="sync">
        <button className="btn" onClick={this.props.onFetchData}>pull</button>     
        <button className="btn" onClick={this.props.onUpdateGists(this.props.gists)}>push</button>
        <div className="status">{ this.props.gists.patching ? 'pushing github' : ''}</div>    
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