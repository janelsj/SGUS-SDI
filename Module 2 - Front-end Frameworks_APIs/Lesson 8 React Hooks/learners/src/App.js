import {Order, Count} from './components/StateChange';
import './App.css';

function App() {
  return (<div className="parent">
    <div className="order"><Order /></div>
   <Count />
  </div>);
}

export default App;