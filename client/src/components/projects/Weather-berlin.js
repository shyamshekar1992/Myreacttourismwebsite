import React, { useState, useEffect } from "react";
// import Jumbotron from 'react-bootstrap/Jumbotron'
// import Container from 'react-bootstrap/Container'

function WeatherFetch(props) {
  const key = 'be4233acd5018612702aa3a2356a654d';
  const [feels_like, setFeelsLike] = useState('');
  const [mainTemp, setMainTemp] = useState('');
  const [description, setDescription] = useState('');
  const [main, setMain] = useState('');
  const [iconID, setIconID] = useState('');
  //api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&appid={API key}
  useEffect(() => {
    if (props.city) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?id=${props.city}&APPID=be4233acd5018612702aa3a2356a654d&units=metric`)
        .then(res => {
          return res.json()
        })
        .then(data => {
          console.log('Updated Weather', data);
          setFeelsLike(data.main.feels_like);
          setMainTemp(data.main.temp);
          setDescription(data.weather[0].description);
          setMain(data.weather[0].main);
          setIconID(data.weather[0].icon);
        })
    }
  }, [props.city])
  return (

    <div>

      <h1>Main Temperature : {mainTemp} Degrees Celsius</h1>
      <h2>Feels like: {feels_like} Degrees Celsius</h2>
      <h3>Weather Parameter: {main}</h3>
      <h4>Description : {description}</h4>
      <img src={"http://openweathermap.org/img/wn/" + iconID + "@2x.png"} />
    </div>

  )
}
export default WeatherFetch;