import React from "react";
import "./Main.css";
import AboutMe from "./AboutMe";
import Home from "./Home";
import NotFoundPage from "./NotFoundPage";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<div className = "child">
      <Router>
      <div className="container">
        <div className="menu">
          <div><Link to = "/">Home</Link></div>
          <div><Link to = "/AboutMe">About Me</Link></div>
        </div>
        <div className="content">
          <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/AboutMe"><AboutMe /></Route>
          <Route component= {NotFoundPage}/>
          </Switch>
        </div>
      </div>
      </Router>
    </div>);
  }
}

export default Main;
