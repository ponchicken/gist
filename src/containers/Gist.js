import React, { Component } from 'react'
import { connect } from 'react-redux'


class Gist extends Component {

  displayGists = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        no gist
      </div>
    )
  }
}

// const mapState = ({  }) => ({
  
// })

export default connect()(Gist)