import React, { Component } from 'react'
import { connect } from 'react-redux'

class Gists extends Component {

  displayGists = () => {
    let gists = this.props.gists.data
    if (gists.length) {
      return gists.map(gist => {
        return <a href={gist.url} key={gist.id}>{ gist.description }</a>
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
  
})

export default connect(mapState, mapDispatch)(Gists)