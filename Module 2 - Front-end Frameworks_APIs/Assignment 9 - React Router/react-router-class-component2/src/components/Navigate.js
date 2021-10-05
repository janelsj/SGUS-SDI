import {NavLink, withRouter} from 'react-router-dom';
import React from 'react';

class Navigate extends React.Component {

    render(){        
        return(<div className="navbar">
            <button><NavLink to="/">Apple</NavLink></button>
            <button><NavLink to="/Orange">Orange</NavLink></button>
            <button><NavLink to="/Banana">Banana</NavLink></button>
        </div>)
    }
}
export default withRouter(Navigate);