import logo from './logo.svg';
import './App.css';



function App() {

  function TodoApp(){
    return(
      <>
        <h1 className={"myClass"}>Todo App</h1>
        <ul>
          <li>Task 1 - Description of task 1 <input type='checkbox' /></li>
          <li>Task 2 - Description of task 2 <input type='checkbox' /></li>
          <li>Task 3 - Description of task 3 <input type='checkbox' /></li>
        </ul>
      </>
    )
  }

  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;
