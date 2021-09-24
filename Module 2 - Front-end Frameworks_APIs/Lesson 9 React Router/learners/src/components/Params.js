import NotFoundPage from './routing-demo/NotFoundPage';
import {BrowserRouter as Router,
    Switch,
    Link,
    Route,
    useParams} from 'react-router-dom';

function User() {
    let {name, region} = useParams();

    return (<div>
        <h4>Name: {name}</h4>
        <h4>Region: {region}</h4>
    </div>)
}

function Params() {
    return(<div className="child">
        <Router>
            <ul>
                <li><Link to="/netflix/singapore">Netflix</Link></li>
                <li><Link to="/facebook/USA">Facebook</Link></li>
            </ul>
            <div className="content">
            <Switch>
                <Route path="/" exact><User /></Route>
                <Route path="/:name/:region" component={User}/>
                <Route component={NotFoundPage} />
            </Switch>
            </div>
        </Router>
    </div>)
}


export default Params;