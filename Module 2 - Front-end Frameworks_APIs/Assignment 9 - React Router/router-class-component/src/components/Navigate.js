import {Redirect, withRouter} from 'react-router-dom';
import React from 'react';

class Navigate extends React.Component {
    constructor() {
        super();
        this.state={
            redirect: null,
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.redirect !== this.state.redirect) {
          return this.setState({redirect: null})
        }
      }

    render(){
        if(this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        };
        
        return(<div className="navbar">
            <button onClick={()=>{this.setState({redirect: "/"})}}>Apple</button>
            <button onClick={()=>{this.setState({redirect: "/Orange"})}}>Orange</button>
            <button onClick={()=>{this.setState({redirect: "/Banana"})}}>Banana</button>
        </div>)
    }
}
export default withRouter(Navigate);