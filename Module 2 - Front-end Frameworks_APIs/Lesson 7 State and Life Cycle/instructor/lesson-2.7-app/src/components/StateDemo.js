import React from 'react';

class StateDemo extends React.Component {
        
    constructor() {
        
        super();

        // Part 1 - This is how you initialize state
        this.state = {
            myName: "Edison",
            age:35,
            showToast:false
        };        

        this.handleUpdate = this.handleUpdate.bind(this); // bind `this` to the function so that JSX can reference the function
      }

      handleUpdate(e){
        e.preventDefault();

        // Part 1 - This is how you should update state.
        this.setState({
            myName:e.target.value
        });
      }

      // Part 2 - Demo componentDidUpdate when state change.
      componentDidUpdate(prevProps, prevState, snapshot){
          // There is no props passed in, so it will be {}.
          // There is no snapshot too, it will be undefined.
          // See documentation here https://reactjs.org/docs/react-component.html#componentdidmount
          console.log(prevProps, prevState, snapshot);      
      }
          
      render() {
        return (
          <div style={{margin:100}}>
            <input type='text' onKeyUp={this.handleUpdate} placeholder="Update my name"/>            
            <div>My name is {this.state.myName}</div>                  
          </div>
        );
      }      
}

export default StateDemo;