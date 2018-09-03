import React, { Component } from 'react'
import queryString from 'query-string'

export default class Login extends Component {

  requestAccess = () => {
    const urlParams = queryString.parse(window.location.search)
    const query = queryString.stringify({
      code: urlParams.code
    })
    const url = `http://localhost:3000/callback?${query}`

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        let { access_token, error } = data.token
        if (error) {
          console.log(data.token.error_description)
          return
        }
        localStorage.setItem('ghtoken', access_token)
      })
  }

  componentDidMount() {
  }

  render() {
    let query = queryString.stringify({
      client_id: '169a193bbe75c0e129d0',
      scope: 'gist'
    })
    let link = `https://github.com//login/oauth/authorize?${query}`
    return (
      <div>
        login
        <a href={link}>to github</a>
        <button onClick={this.requestAccess}>request access</button>
      </div>
    )
  }
}
