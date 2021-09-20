import React from 'react';

class Child extends React.Component {
    componentWillUnmount() {
        console.log("Child Unmounted");
    }
    render(){
        return(<div>
            <h3>I am child component</h3>
            <button onClick={this.props.onUnMount}>Unmount Child</button>
        </div>)
    }
}

export default Child;