import React, { Component } from 'react';
import { render } from 'react-dom';
import Rules from './Rules';
import ConfigureRules from './ConfigureRules';
import './style.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  

  render() {
    return (
       <Router>
    <div>
      <ul>
        <li><Link to="/">Rules</Link></li>
        <li><Link to="/configureRules">ConfigureRules</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Rules}/>
      <Route path="/configureRules" component={ConfigureRules}/>
      <Route path="/rules" component={Rules}/>
    </div>
  </Router>
    );
  }
}


render(<App />, document.getElementById('root'));
