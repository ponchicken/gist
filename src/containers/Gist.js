import React, { Component } from 'react'
import { connect } from 'react-redux'

import GistContent from './GistContent'

import {
  changeGist, gistAdd
} from '../actions/gist'

class Gist extends Component {

  submitHandler = (gist) => e => {
    if (e) e.preventDefault()
    if (this.props.gists.data.findIndex(g => {
      return g.id === gist.id
    }) !== -1) {
      this.props.onUpdateGist(gist)
    } else {
      this.props.onAddGist(gist)
    }
  }

  displayGist = () => {
    let {
      gists, gist
    } = this.props
    if (!gists || !gist)
      return 'no active gist'
    else {
      return <GistContent updateGist={this.submitHandler}/>
    }
  }

  handleKeyboard = (e) => {
    if (e.ctrlKey || e.metaKey) {
      switch (String.fromCharCode(e.which).toLowerCase()) {
        case 's':
          this.submitHandler(this.props.gist)(e)
          break;
        default:
          break;
      }
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyboard)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyboard);
  }

  render() {
    return (
      <div>
        { this.displayGist() }
      </div>
    )
  }
}

const mapState = ({ gists, gist }) => ({
  gists, gist
})

const mapDispatch = dispatch => ({
  onUpdateGist: gist => {
    Object.keys(gist.files).forEach(key => {
      let file = gist.files[key]
      if (file && !file.content) delete gist.files[key]
    })
    if (gist.files.length) {
      dispatch(changeGist(gist))
    } else {
      console.log('No files in gist')
    }
  },
  onAddGist: gist => {
    dispatch(gistAdd(gist))
  }
})

export default connect(mapState, mapDispatch)(Gist)