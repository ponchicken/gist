import React, { Component } from 'react'
import { connect } from 'react-redux'

class Gist extends Component {

  componentDidMount() {
    console.log(this.props.gist)
  }

  render() {
    let { description } = this.props.gist.data
    return (
      <div>
        { description ? description : 'no gist' }
      </div>
    )
  }
}

const mapState = ({ gist }) => ({
  gist
})

export default connect(mapState)(Gist)