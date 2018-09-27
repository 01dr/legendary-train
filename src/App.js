import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { incrementCounter, decrementCounter } from './redux/ducks/counter';

class App extends Component {
  render() {
    const {
      counter,
      incrementCounter,
      decrementCounter
    } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          Counter: {counter}<br/>
          <button type="button" onClick={incrementCounter}>increment</button>
          <button type="button" onClick={decrementCounter}>decrement</button>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    counter: state.counter
  }),
  {
    incrementCounter,
    decrementCounter
  }
)(App);
