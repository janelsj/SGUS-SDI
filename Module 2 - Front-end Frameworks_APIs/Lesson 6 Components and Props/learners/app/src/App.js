import './App.css';
import Parent from './components/Parent';
import PropComponent from './components/PropComponent.js';
import FnComponent from './components/FnComponent.js';



const PetObject = {
  name: "Bingo",
  age: 3,
  type: 'Golden Retriever'
}

function App() {
  return (<>
    <Parent />
    <PropComponent name="Rocky" age="1" type="Dalmatian" />
    <PropComponent name="Max" age={2} />
    <PropComponent {...PetObject}/>
    <FnComponent/>
  </>);
}

export default App;
