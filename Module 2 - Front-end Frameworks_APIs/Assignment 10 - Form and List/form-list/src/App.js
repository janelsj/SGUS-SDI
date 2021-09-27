import FormFunctionalComponent from './components/FormFunctional';
import FormClassComponent from './components/FormClassComponent';
import './App.css';

function App() {
  return (<div id="parent">
      <FormClassComponent/>
      <FormFunctionalComponent/>
   </div>);
}

export default App;
