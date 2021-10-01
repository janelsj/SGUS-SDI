import API from './API';
import {useState} from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState();
  const [ip, setIp] = useState("");
  const [capital, setCapital] = useState("");
  const [country, setCountry] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    (async function getData() {
      await API.get("json/", {
        params: {ip: input}
        }).then(response => {
          if (response.data.type === "IPv4" || response.data.type === "IPv6") {
            setIp(response.data.ip);
            setCapital(response.data.country_capital);
            setCountry(response.data.country);
        }
      })
    })();
  }

  return (
    <div className="App">
      <h3>Find Location of IP Address</h3>
      Enter IP address: <input type="text" placeholder= "IPv4 or IPv6 format" onChange={handleChange} required autoFocus/>
      <button onClick={handleSubmit}>Find Location</button>
      <div className="output">
      <b>IP address:</b> {ip} <br/>
      <b>Area:</b> {capital} {country}
      </div>
    </div>
  );
}

export default App;
