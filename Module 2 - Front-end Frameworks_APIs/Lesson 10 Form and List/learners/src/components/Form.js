import React from 'react';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        const data = {...this.state};
        switch(event.target.name){
            case "first-name":
                data.firstName = event.target.value;
                break;
            case "last-name":
                data.lastName = event.target.value;
                break;
            case "age":
                data.age = event.target.value;
        }
        this.setState(data);
    };

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.firstName, this.state.lastName, this.state.age);
    }

    render() {
        return(<div id="form">
            <form action="/form-data" method="get" onSubmit={this.handleSubmit}>
            <input type="text" name="first-name" placeholder="Enter First Name" onChange={this.handleInput} value={this.state.firstName} />
            <input type="text" name="last-name" placeholder="Enter Last Name" onChange={this.handleInput} value={this.state.lastName} />
            <input type="number" name="age" placeholder="Enter Age" onChange={this.handleInput} value={this.state.age} />
            <input type="submit" value="Submit" />
            </form>
            <h4>Output: {this.state.firstName} {this.state.lastName} {this.state.age}</h4>
        </div>)
    }
}

export default Form;