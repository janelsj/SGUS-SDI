import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Apple from './components/Apple';
import Orange from './components/Orange';
import Banana from './components/Banana';
import NotFoundPage from './components/NotFoundPage';
import Navigate from './components/Navigate';
import './App.css';

class App extends React.Component {

    render(){      
      return(<div id = "parent">
        <BrowserRouter>
        <div className="container">
          <Navigate/>
        <div className="content">
            <Switch>
            <Route exact path="/" component={Apple} />
            <Route path="/Orange" component={Orange} />
            <Route path="/Banana" component={Banana} />
            <Route path = "*" component={NotFoundPage} />
            </Switch>
          </div>
        </div>
        </BrowserRouter>
    </div>)
    }
}

export default App;