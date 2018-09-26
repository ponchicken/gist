import React, { Component } from 'react'
import { connect } from 'react-redux'

import GistData from '../components/GistData'

import {
  fetchGistFile,
  changeGist,
  fileAdd,
  fileRemove
} from '../actions/gist'


class Gist extends Component {

  constructor(props) {
    super(props)
    this.state = {
      code: '',
    }
  }

  displayGist = () => {
    let {
      gists
    } = this.props
    if (!gists || !gists.active)
      return 'no active gist'
    else {
      this.gist = gists.data.find(item => item.id === gists.active.id)
      return <GistData 
        gist={this.gist} 
        updateGist={this.props.onUpdateGist}
        fileAdd={this.props.onFileAdd}
        fileRemove={this.props.onFileRemove}
        getInitialGist={gists.active}
      />
    }
  }

  handleKeyboard = (e) => {
    if (e.ctrlKey || e.metaKey) {
      switch (String.fromCharCode(e.which).toLowerCase()) {
        case 's':
          if (this.gist) this.updateGist(this.gist)(e)
          break;
        default:
          break;
      }
    }
  }

  updateGist = gist => e => {
    this.props.onUpdateGist(gist, this.props.gists.active)(e)
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

const mapState = ({ gists }) => ({
  gists
})

const mapDispatch = dispatch => ({

})

export default connect(mapState, mapDispatch)(Gist)