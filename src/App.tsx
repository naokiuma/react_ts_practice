

import {useState} from 'react';

import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';




function App() {
  const [city,setCity] = useState<String>("");
  const getWeather = (e:any) => {
      e.preventDefault();
      fetch("https://api.weatherapi.com/v1/current.json?key=5c2df4c00423492cb1985434221707&q=tokyo&aqi=no")
      .then(res => res.json())
      .then(data => console.log(data));
  }
  return (
    <div className="App">
     <Title />
     <Form setCity={setCity} getWeather={getWeather}/>
     <Results />

    </div>
  );
}

export default App;
