import React from 'react';

class PropComponent extends React.Component {
    render() {
        const{name, age, type="dog"} = this.props;
        return(<div>
            This is a {type} named {name} and it is {age} years old.
        </div>)
    }
}



export default PropComponent;