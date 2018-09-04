import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import Todo from './containers/Todo'
import Gists from './containers/Gists';
import Gist from './containers/Gist';
import Login from './containers/Login';
import Sync from './containers/Sync';

class App extends Component {

  isAuthenticated = false

  chooseStartPage = (props) => {
    if (this.isAuthenticated) {
      return (
        <Gist />
      ) 
    } else {
      console.log('should redirect')
      return (
        <Gist />
      ) 
      // window.location = 'https://github.com/login/oauth/authorize?client_id=169a193bbe75c0e129d0&redirect_uri=/gist'
    }
  }

  render() {
    return (
      <Router>
        <div className="app">
          <header>
            <nav>
              <Link to="/">home</Link>
              <Link to="/gist">gist</Link>
              <Link to="/login">login</Link>
            </nav>
            <Sync />
          </header>
          <aside>
            <Gists />
          </aside>
          <main>
            <Route exact path="/" render={this.chooseStartPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/gist" component={Gist} />
          </main>
          <footer>
            footer
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
