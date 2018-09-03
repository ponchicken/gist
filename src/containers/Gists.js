import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGists } from '../actions';
import { gistFetch } from '../actions/gist'

class Gists extends Component {

  componentDidMount() {
    this.props.loadGists()
  }

  render() {
    return (
      <div className="gists-list">
        {
          this.props.gists.list.map(gist => {
            return <a href={gist.url} key={gist.id} onClick={this.props.loadGist(gist.id)}>{ gist.description }</a>
          })
        }
      </div>
    )
  }
}

const mapState = ({ gists }) => ({
  gists
})

const mapDispatch = dispatch => ({
  loadGist: id => e => {
    e.preventDefault()
    dispatch(gistFetch(id))
  },
  loadGists: () => {
    dispatch(fetchGists('ponchicken'))
  }
})

export default connect(mapState, mapDispatch)(Gists)