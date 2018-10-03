import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchUser
} from '../actions/user'
import { setActiveGist } from '../actions/gist'
import { fetchGists, updateGists } from '../actions/gists';


class Sync extends Component {

  componentDidMount() {
    // this.props.onFetchData()
  }

  render() {
    let {
      gists,
      gist,
      onFetchData,
      onUpdateGists
    } = this.props
    return (
      <div className="sync">
        <button 
          className="btn" 
          onClick={onFetchData(gists.data.find(activeGist => gist.id === activeGist.id))}
        >pull</button>     
        <button className="btn" onClick={onUpdateGists(gists)}>push</button>
        <div className="status">
          { this.props.gists.patching ? 'pushing to github..' : ''}
          { this.props.gists.pending ? 'getting data from github..' : ''}
        </div>    
      </div>
    )
  }
}

const mapState = ({ gists, gist }) => ({
  gists, gist
})

const mapDispatch = dispatch => ({
  onFetchData: (gist) => e => {
    fetchUser(dispatch)
    fetchGists(dispatch)
    dispatch(setActiveGist(gist))
  },
  onUpdateGists: (gists) => () => {
    // TODO pull (onFetchData) after update
    // or delete all files with null
    // should make promise from updateGists
    dispatch(updateGists(gists))
  }
})

export default connect(mapState, mapDispatch)(Sync)