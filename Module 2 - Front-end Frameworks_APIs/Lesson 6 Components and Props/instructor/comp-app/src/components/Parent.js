import React from 'react';
import Child from './Child';
import ThirdSibling from './ThirdSibling';

// Functional component
function SecondSibling(){
    return <div>It is not recommended to define me outside a class</div>
}

class Parent extends React.Component {

    // Functional component
    Sibling(){
        return <div>I am a sibling component</div>
    }

    render(){
        return(<>
            <h1>I am a Parent component</h1>
            <Child name="Ming" />
            <this.Sibling/>
            <SecondSibling/>
            <ThirdSibling name="Tan"/>
        </>); // notice the braces when return multiple JSX element.
    }
}

export default Parent;