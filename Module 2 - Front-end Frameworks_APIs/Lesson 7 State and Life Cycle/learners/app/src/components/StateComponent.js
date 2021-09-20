import React from "react";

class StateComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            value:"",   //this property name must be the same as the property name in line 14
        };
        this.inputHandler = this.inputHandler.bind(this);
        console.log("constructor");
    }

    componentDidMount() {
        console.log("Component mounted");
    }

    componentDidUpdate(prevProp, prevState, snapshotObject) {
        console.log("Component Update:", prevProp, prevState, snapshotObject);
    }

    inputHandler(e) {
        this.setState({
            value: e.target.value,  //this property name must be the same as the property name in line 7
        })
    }

    render(){
        return(
            <div className="form">
                <h2>My name is {this.state.value}</h2>
                <input type="text" placeholder="Input name here..." onChange={this.inputHandler} autoFocus/>
            </div>
        )
    }
}

export default StateComponent;