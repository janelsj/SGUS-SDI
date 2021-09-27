import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ListDemo from "./components/ListDemo";
import KeyDemo from "./components/KeyDemo";
import FormInput from "./components/FormInput";
import PreventDefaultDemo from "./components/PreventDefaultDemo";

ReactDOM.render(
  <React.StrictMode>
    <h2>Part 1</h2>
    <ListDemo/>
    <h2>Part 2</h2>
    <KeyDemo/>
    <h2>Part 3</h2>
    <FormInput />
    <h2>Part 4</h2>
    <PreventDefaultDemo/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
