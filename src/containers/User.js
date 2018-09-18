import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  getGhCode,
  fetchToken,
  logout
} from '../actions/login'
import {
  fetchUser
} from '../actions/user'
import { 
  fetchGists 
} from '../actions/gists';

class User extends Component {

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
    let user = this.props.user.data
    return (
      <div className="header-user">
        <a href={user.html_url} className="header-user-name">
          <img src={user.avatar_url} alt="" className="header-user-img" />
          { user.login }
        </a>
        
        { this.loading() }
        <button onClick={getGhCode}>Login</button>
        <button onClick={this.props.onLogout}>Logout</button>
      </div>
    )
  }
}

const mapState = ({ login, user }) => ({
  login, user
})

const mapDispatch = dispatch => ({
  onFetchToken: () => {
    fetchToken(dispatch).then(res => {
      fetchUser(dispatch)
      fetchGists(dispatch)
    })
  },
  onLogout: () => {
    dispatch(logout())
  },
  onFetchData: () => {
    fetchUser(dispatch)
    fetchGists(dispatch)
  },
})

export default connect(mapState, mapDispatch)(User)