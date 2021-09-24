import React from "react";
import LightOn from "../../src/assets/images/light-on.png";
import LightOff from "../../src/assets/images/light-off.png";

class CondRenderDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      isLightOn: false,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ isLightOn: !this.state.isLightOn });
  }

  render() {
    return (
      <>
        {
            // This is conditional rendering
            this.state.isLightOn ? <img src={LightOn} /> : <img src={LightOff} />
        }
        <button onClick={this.handleToggle}>Toggle</button>
      </>
    );
  }
}

export default CondRenderDemo;
