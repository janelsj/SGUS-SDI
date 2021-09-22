import React from 'react';
import lightOff from './assets/images/light-off.png';
import lightOn from './assets/images/light-on.png';

/* Code using an eventHandler function/method (without componentDidUpdate) */

class LightState1 extends React.Component {
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
        return(<>
            <h4>Method 1: Using eventHandler function (without componentDidUpdate)</h4>
            <div className="container">
                <div>{this.image()}</div>
                <button onClick={this.onClickHandler}>Toggle</button>
            </div>
            </>)
    }
}


/* Code without an eventHandler function/method (without componentDidUpdate) */

class LightState2 extends React.Component {
    constructor(){
        super();
        this.state = {
            isLightOn: false,
        };
    }
    
    image() {
        if(this.state.isLightOn){
            return lightOn;
        } else{
            return lightOff;
        } 
    }

    render() {
        return(<>
            <h4>Method 2: Without eventHandler function (without componentDidUpdate)</h4>
            <div className="container">
                <img src={this.image()} />
                <button onClick={() => this.setState({isLightOn: !this.state.isLightOn})}>Toggle</button>
            </div>
            </>)
    }
}


/* Code without an eventHandler function/method (using componentDidUpdate) */

class LightState3 extends React.Component {
    constructor(){
        super();
        this.state = {
            isLightOn: false,
        };
    }
    
    image() {
        if(this.state.isLightOn){
            return lightOn;
        } else {
            return lightOff;
        } 
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.isLightOn === this.state.isLightOn) {
            this.setState({isLightOn: !this.state.isLightOn});
        };
    }

    render() {
        return(<>
        <h4>Method 3: Without eventHandler function, using componentDidUpdate</h4>
        <div className="container">
            <img src={this.image()} />
            <button onClick={()=>this.componentDidUpdate(this.props, this.state)}>Toggle</button>
        </div>
        </>)
    }
}

export {LightState1, LightState2, LightState3};