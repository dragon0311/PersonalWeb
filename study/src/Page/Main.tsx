import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './Nav';
import { MainRoute } from './route';

class Main extends Component {
  render() {
    return (
      <div>
        <Router>
          <Nav/>
          <MainRoute/>
        </Router>
      </div>
    );
  }
}

export default Main;