import React from 'react';
import ChildComponent4 from './ChildComponent4';


//Method 1: Defining a component outside a class
const ChildComponent1 = (props) => {
    const { name = "child 1 name" } = props;
    return(<div>Child component 1: {name}</div>)
}

class FnComponent extends React.Component {
//Method 2: Defining a component inside a class (using 'this')
    //Capital letters 'C' in ChildComponent2.
    ChildComponent2 = (props) => {
        const { name = "child 2 name" } = props;
        return(<div>
        Child Component 2: {name}
        </div>)
    }

//Method 3: Defining a component inside a class (invoking a function)
    //Small letters 'c' in childComponent3.
    childComponent3 = (name) => {
        return(<div>
            Child Component 3: {name}
        </div>)
    }

    render() {
        const name = "main";
        return(<div>
            This is the {name} component.
            <ChildComponent1 name = "child1"/>
            <this.ChildComponent2 name ="child2"/>
            {this.childComponent3("child3")}    
            <ChildComponent4 name = "child4"/>
        </div>)
    }
}



export default FnComponent;