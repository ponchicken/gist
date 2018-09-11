import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  getGhCode,
  fetchToken,
  logout
} from '../actions/login'

class Login extends Component {

  loading = () => {
    if (this.props.login.pending) 
    return 'loading...'
  }

  componentDidMount () {
    let {
      login,
      onFetchToken
    } = this.props
    if (!login.isAuth)
      onFetchToken()
  }

  render() {
    return (
      <div>
        { this.loading() }
        <button onClick={getGhCode}>Login</button>
        <button onClick={this.props.onLogout}>Logout</button>
      </div>
    )
  }
}

const mapState = ({ login }) => ({
  login
})

const mapDispatch = dispatch => ({
  onFetchToken: () => {
    fetchToken(dispatch)
  },
  onLogout: () => {
    dispatch(logout())
  }
})

export default connect(mapState, mapDispatch)(Login)