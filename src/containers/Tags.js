import React, { Component } from 'react'
import { connect } from 'react-redux'
import {parseTitle} from '../helpers/parseTitle'

class Tags extends Component {
  componentDidMount() {
  }
  
  render() {
    let { gists } = this.props
    let tags = new Set()
    gists.map(gist => {
      let title = parseTitle(gist.description)
      if (title.tags)
        title.tags.forEach(tag => tags.add(tag))
    })
    return (
      <div>
        { Array.from(tags).map(tag => {
          return <div key={ tag }>{ tag }</div>
        }) }
      </div>
    )
  }
}

const mapState = ({ gists }) => ({
  gists: gists.data
})

const mapDispatch = dispatch => ({

})

export default connect(mapState, mapDispatch)(Tags)