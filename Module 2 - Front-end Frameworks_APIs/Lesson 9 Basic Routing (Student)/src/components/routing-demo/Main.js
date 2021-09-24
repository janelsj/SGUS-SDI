import React from "react";
import "./Main.css";
import AboutMe from "./AboutMe";
import Home from "./Home";

class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <div className="menu">
          <div>Home</div>
          <div>About Me</div>
        </div>
        <div className="content">
          To place Home / About Me content here.
          <Home />
          <AboutMe />
        </div>
      </div>
    );
  }
}

export default Main;
