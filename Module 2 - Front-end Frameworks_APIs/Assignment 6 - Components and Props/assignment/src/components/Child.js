import React from 'react';

class Child extends React.Component {
    link = (className, text, url) => {
        return (
            <div className={className}><a href={url}>{text}</a></div>
        )
    }
    render(){
        const {link, heading, title1, title2, title3, viewAll} = this.props;
        return(<>
            {this.link("heading", heading, link)}
            {this.link("title", title1, link)}
            {this.link("title", title2, link)}
            {this.link("title", title3, link)}
            {this.link("viewAll", viewAll, link)}
        </>)
    }
}

export default Child;