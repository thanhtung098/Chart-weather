
import './App.css';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';

class App extends Component {
  render() {
  return (
    <div className="App container">
        <Route path="/">
          <Home></Home>
        </Route>
    </div>

  );
  }
}

export default App;
