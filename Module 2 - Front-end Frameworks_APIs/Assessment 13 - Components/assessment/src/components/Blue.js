import React from 'react';

class Blue extends React.Component{
    
    render() {
        const {title, details} = this.props;
        return (<div className="blue">
            <div className = "title">{title}</div> <br />
            <div className = "details">{details}</div>
        </div>)
    }
}

export default Blue;