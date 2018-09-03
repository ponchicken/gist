import React, { Component } from 'react'

export default class Login extends Component {

  requestAccess = () => {
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code')

    fetch(`http://localhost:3000/callback?code=${code}`)
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
    return (
      <div>
        login
        <a href="https://github.com//login/oauth/authorize?client_id=169a193bbe75c0e129d0&scope=gist">to github</a>
        <button onClick={this.requestAccess}>request access</button>
      </div>
    )
  }
}
