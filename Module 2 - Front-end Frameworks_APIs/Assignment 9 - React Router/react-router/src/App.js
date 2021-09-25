import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Apple from './components/Apple';
import Orange from './components/Orange';
import Banana from './components/Banana';
import NotFoundPage from './components/NotFoundPage';
import './App.css';

function App() {
  return (<div id = "parent">
    <BrowserRouter>
    <div className="container">
       <div className="navbar">
          <div><Link to = "/Apple">Apple</Link></div>
          <div><Link to = "/Orange">Orange</Link></div>
          <div><Link to = "/Banana">Banana</Link></div>
      </div>
      <div className="content">
        <Switch>
        <Route path="/" exact component={Apple} />
        <Route path="/Apple" component={Apple} />
        <Route path="/Orange" component={Orange} />
        <Route path="/Banana" component={Banana} />
        <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    </div>
    </BrowserRouter>
</div>);
}

export default App;
