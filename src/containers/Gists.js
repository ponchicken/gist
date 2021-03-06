import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setActiveGist } from '../actions/gist'
import { parseTitle } from '../helpers/parseTitle'

class Gists extends Component {

  chooseGistClass (gist) {
    let classes = ''
    classes += (gist.id === this.props.gists.active) ? 'active ' : ''
    classes += (gist.changed) ? 'changed ' : ''
    return classes
  }

  displayGists = () => {
    let gists = this.props.gists.data
    if (gists.length) {
      return gists.map((gist, i) => {
        if (!gist.description) return <div key={i}>hmm</div> 
        let name = parseTitle(gist.description)
        return (
          <button 
            onClick={this.props.setGist(gist)} 
            key={i}
            className={this.chooseGistClass(gist)}
          >
            { name.title }
          </button>
        )
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
  },
  loadGistFiles: gist => {
    // let files = gist.files
    // files.map(file => {
    //   file
    // })
  }
})

export default connect(mapState, mapDispatch)(Gists)