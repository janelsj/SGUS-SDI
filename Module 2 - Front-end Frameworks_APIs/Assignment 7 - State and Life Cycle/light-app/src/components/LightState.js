import React from 'react';
import lightOff from './assets/images/light-off.png';
import lightOn from './assets/images/light-on.png';

class LightState extends React.Component {
    constructor(){
        super();
        this.state = {
            isLightOn: false,
        };
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    
    image() {
        if (this.state.isLightOn) {
            return (<><img src={lightOn} alt="light on" /></>);
        } else {
            return (<><img src={lightOff} alt="light off"/></>);
        }
    }

    onClickHandler() {
        if (this.state.isLightOn === false) {
            this.setState({
                isLightOn: true,
            });
        } else {
            this.setState({
                isLightOn: false,
            });
        };
    }

    render() {
        return(<div id="container">
            <div id="bulb">{this.image()}</div>
            <button onClick={this.onClickHandler}>Toggle</button>
        </div>)
    }
}

export default LightState;