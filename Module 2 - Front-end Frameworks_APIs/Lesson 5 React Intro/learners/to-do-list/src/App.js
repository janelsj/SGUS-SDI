import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Checkbox() {
  return(
    <>
      <input type="checkbox" />
    </>
  );
}

function MyApp() {
    return(
      <>
        <h1 className="myH1">My To-do List</h1>
        <div className="myClass">
          <ul>
            <li>Task 1 <Checkbox /></li>
            <li>Task 2 <Checkbox /></li> 
            <li>Task 3 <Checkbox /></li>
          </ul>
        </div>
      </>
    );
}

export default MyApp;
