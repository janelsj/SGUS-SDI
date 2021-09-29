import React from 'react';
import './Style.css';
import Answer from '../components/Answer';
import Form from '../components/Form';

class Parent extends React.Component {
    state = {answer: null}
    
    sumHandler = (addedNumbers) => {
        this.setState({answer: addedNumbers});
    }

    render() {
        return(<div id="parent">
            <Form sum={this.sumHandler}/>
            <Answer answer={this.state.answer}/>
        </div>)
    }
}

export default Parent;