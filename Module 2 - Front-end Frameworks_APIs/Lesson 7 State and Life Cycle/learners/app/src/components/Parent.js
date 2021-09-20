import React from 'react';
import Child from './Child';

class Parent extends React.Component {
    constructor(){
        super();
        this.state ={
            isChildMounted: true,
        };
        this.unMountHandler = this.unMountHandler.bind(this);
    }

    unMountHandler() {
        this.setState({
            isChildMounted: false,
        });
    }

    render() {
        return(<>
            <div>
            <h1>Parent Component</h1>
            {this.state.isChildMounted? (<Child onUnMount={this.unMountHandler} />):null}
            </div>
        </>)
    }

}

export default Parent;