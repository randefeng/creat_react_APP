import React, { Component } from 'react';
// import logo from './logo.svg';/
import {
  BrowserRouter as Router, Route, Switch

} from 'react-router-dom';
import './App.css';
import Login from "./dist/login";
import Index from "./dist/index";
import Name1 from "./dist/details/name1";
import Name2 from "./dist/details/name2";
import Name3 from "./dist/details/name3";

var aa404 =()=>  <h1>404</h1>
class App extends Component {
  
  render() {
    return (
        <Router  >
          <div>
            <Switch>
              <Route path="/dist/index" exact component={Index}></Route>
              <Route path="/dist/Login" exact component={Login}></Route>
              <Route path="/Login" exact component={Login}></Route>
              <Route path="/dist/details/name1" exact component={Name1}></Route>
              <Route path="/dist/details/name2" exact component={Name2}></Route>
              <Route path="/dist/details/name3" exact component={Name3}></Route>
              <Route component={aa404} ></Route>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
