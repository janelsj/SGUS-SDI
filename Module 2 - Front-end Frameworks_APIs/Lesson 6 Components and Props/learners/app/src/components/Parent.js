import React from 'react';
import Child from './Child';
import ThirdSibling from './ThirdSibling';

// Functional component
function SecondSibling(){
    return <div>It is <s>not</s> recommended to define me outside a class</div>
}

class Parent extends React.Component {

    // Functional component
    Sibling(){
        return <div>I am a sibling component</div>
    }

    render(){
        return(<>
            <h1>I am a Parent component</h1>
            <Child name="Jane" />
            <this.Sibling/>
            <SecondSibling/>
            <ThirdSibling name="Lim"/>
        </>); // notice the braces when return multiple JSX element.
    }
}

export default Parent;