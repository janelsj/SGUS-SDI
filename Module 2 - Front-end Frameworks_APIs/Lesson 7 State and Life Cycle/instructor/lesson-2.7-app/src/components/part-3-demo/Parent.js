import React, { Component } from 'react';
import Child from "./Child";

class Parent extends Component {
    constructor(){
        super();

        this.state = {
            mountChild:true
        }

        this.unmountChild = this.unmountChild.bind(this);
    }

    unmountChild(){
        this.setState({mountChild:false})
    }

    render(){
        return(
            <>
                <div>I am a parent</div>
                {this.state.mountChild ? <Child unmountMe={this.unmountChild} /> : null}
            </>
        )
    }
}

export default Parent;