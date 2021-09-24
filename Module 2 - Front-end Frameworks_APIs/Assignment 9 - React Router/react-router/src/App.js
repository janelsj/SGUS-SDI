import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Apple from './components/Apple';
import Orange from './components/Orange';
import Banana from './components/Banana';
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
        <Route path="/" exact><Apple /></Route>
        <Route path="/Apple" ><Apple /></Route>
        <Route path="/Orange"><Orange /></Route>
        <Route path="/Banana"><Banana /></Route>
        </Switch>
      </div>
    </div>
    </BrowserRouter>
</div>);
}

export default App;
