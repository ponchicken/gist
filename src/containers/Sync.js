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
      onFetchData,
      onUpdateGists
    } = this.props
    return (
      <div className="sync">
        <button 
          className="btn" 
          onClick={onFetchData(gists.data.find(gist => gist.id === gists.active.id))}
        >pull</button>     
        <button className="btn" onClick={onUpdateGists(gists)}>push</button>
        <div className="status">{ this.props.gists.patching ? 'pushing github' : ''}</div>    
      </div>
    )
  }
}

const mapState = ({ gists }) => ({
  gists
})

const mapDispatch = dispatch => ({
  onFetchData: (gist) => e => {
    fetchUser(dispatch)
    fetchGists(dispatch)
    dispatch(setActiveGist(gist))
  },
  onUpdateGists: (gists) => () => {
    dispatch(updateGists(gists))
  }
})

export default connect(mapState, mapDispatch)(Sync)