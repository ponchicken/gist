import React, { Component } from 'react'
import { connect } from 'react-redux'

import GistData from '../components/GistData'

import {
  fetchGistFile,
  changeGist,
  fileAdd
} from '../actions/gist'


class Gist extends Component {

  constructor(props) {
    super(props)
    this.state = {
      code: ''
    }
  }

  displayGist = () => {
    let {
      gists
    } = this.props
    if (!gists.active)
      return 'no active gist'
    else {
      this.gist = gists.data.find(item => item.id === gists.active)
      return <GistData 
        gist={this.gist} 
        updateGist={this.props.onUpdateGist}
        fileAdd={this.props.onFileAdd}
      />
    }
  }

  handleKeyboard = (e) => {
    if (e.ctrlKey || e.metaKey) {
      switch (String.fromCharCode(e.which).toLowerCase()) {
        case 's':
          if (this.gist) this.props.onUpdateGist(this.gist)(e)
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

const mapState = ({ gists }) => ({
  gists
})

const mapDispatch = dispatch => ({
  loadFile: (data) => e => {
    dispatch(fetchGistFile(data))
  },
  onUpdateGist: (gist) => e => {
    if (e) e.preventDefault()
    dispatch(changeGist(gist))
  },
  onFileAdd: (gist) => {
    dispatch(fileAdd(gist))
  }
})

export default connect(mapState, mapDispatch)(Gist)