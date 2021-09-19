import React, { Component } from 'react';

class Child extends Component {
    constructor(){
        super();
    }

    componentDidMount(){
        console.log("I am mounted");
    }

    componentWillUnmount(){
        console.log("I am unmounting");
    }

    render(){
        return <div>I am a child. <button onClick={this.props.unmountMe}>Unmount</button></div>
    }
}

export default Child;