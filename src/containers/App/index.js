import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Main from '../Main';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Main</Link>
          <Link to="/sign-in">Sign In</Link>
          <Link to="/sign-up">Sign Up</Link>
        </header>

        <main>
          <Route exact path="/" component={Main} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
        </main>
      </div>
    );
  }
}

export default App;