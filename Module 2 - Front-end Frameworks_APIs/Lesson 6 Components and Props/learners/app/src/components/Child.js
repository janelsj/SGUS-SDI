import React from 'react';

class Child extends React.Component{
    render(){
        return <div>I am a child component and my name is {this.props.name}</div>
    }
}

export default Child;