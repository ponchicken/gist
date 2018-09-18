import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Todo from './containers/Todo'
import Gists from './containers/Gists';
import Gist from './containers/Gist';
import User from './containers/User';
import Sync from './containers/Sync';

class App extends Component {

  isAuthenticated = false

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
      {/* <Router> */}
        <div className="app">
          <header className="header">
            <Sync />
            <User />
          </header>
          <aside>
            <Gists />
          </aside>
          <main>
            <Route exact path="/" component={Gist} />
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
