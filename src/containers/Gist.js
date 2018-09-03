import React, { Component } from 'react'
import { connect } from 'react-redux'

// import { getGists, user } from '../api/get'

class Gist extends Component {

  componentDidMount() {
    console.log(this.props.gist)
  }

  displayGists = (e) => {
    e.preventDefault()
    // user(data => console.log(data))
    // getGists(data => console.log(data))
  }

  render() {
    let { description } = this.props.gist.data
    return (
      <div>
        <button onClick={this.displayGists}>clog gists</button>
        { description ? description : 'no gist' }
      </div>
    )
  }
}

const mapState = ({ gist }) => ({
  gist
})

export default connect(mapState)(Gist)