import './App.css';
import ConditionalRender from './components/ConditionalRender'
import Main from './components/routing-demo/Main.js';
import Params from './components/Params';

function App() {
  return (<div id="parent">
    <ConditionalRender />
    <Main />
    <Params />
  </div>);
}

export default App;
