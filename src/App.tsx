

import {useState} from 'react';

import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import './App.css';

type ResultsStateType = {
  country:string;
  cityName:string;
  temprature:string;
  conditionText:string;
  icon:string;
}




function App() {
  const [city,setCity] = useState<string>("");
  const [results,setResults] = useState<ResultsStateType>({
    country:"",
    cityName:"",
    temprature:"",
    conditionText:"",
    icon:"",
  });


  const getWeather = (e:React.FormEvent<HTMLFormElement>) => {//reactが定義している型でReact.FormEvent<HTMLFormElement>
      e.preventDefault();
      fetch(`https://api.weatherapi.com/v1/current.json?key=5c2df4c00423492cb1985434221707&q=${city}&aqi=no`)
      .then(res => res.json())
      .then(data => {
        setResults({
          country: data.location.name,
          cityName: data.location.name,
          temprature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon,
        })
        setCity('');
      })
      .catch(err => alert('エラーが発生しました。地域名が正しいか、改めてご確認ください。'));
  }
  return (
    <div className="App">
     <Title />
     <Form setCity={setCity} getWeather={getWeather} city={city}/>
     <Results results={results}/>
     {/* 慣例として、propsの名前は値と同じにする。 */}

     {city}

    </div>
  );
}

export default App;
