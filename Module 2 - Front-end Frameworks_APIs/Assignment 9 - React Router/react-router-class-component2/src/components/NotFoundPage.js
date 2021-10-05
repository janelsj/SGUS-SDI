import React from 'react';
import {withRouter} from 'react-router-dom';

class NotFoundPage extends React.Component {
    render() {
        const {location} = this.props;
        return (<div id = "error">
                <h2>Error: page {location.pathname} does not exist.</h2>
            </div>)
    }
}

export default withRouter(NotFoundPage);