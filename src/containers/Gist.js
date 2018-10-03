import React, { Component } from 'react'
import { connect } from 'react-redux'

import GistContent from './GistContent'

import {
  changeGist
} from '../actions/gist'

class Gist extends Component {

  displayGist = () => {
    let {
      gists, gist
    } = this.props
    if (!gists || !gist)
      return 'no active gist'
    else {
      return <GistContent updateGist={this.props.onUpdateGist}/>
    }
  }

  handleKeyboard = (e) => {
    if (e.ctrlKey || e.metaKey) {
      switch (String.fromCharCode(e.which).toLowerCase()) {
        case 's':
          this.props.onUpdateGist(this.props.gist)(e)
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
  onUpdateGist: gist => e => {
    if (e) e.preventDefault()
    dispatch(changeGist(gist))
  }
})

export default connect(mapState, mapDispatch)(Gist)