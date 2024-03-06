import './WeatherApp.css'
import React, { useState } from 'react'

import search_icon from '../Assets/search_system_icon.png'
import clear_icon from '../Assets/cloud_sun_sunny_weather_icon.png'
import cloud_icon from '../Assets/hot_sun_weather_icon.png'
import cloud_winter from '../Assets/cloud_cold_weather_winter_icon.png'
import heavy_rain_storm from '../Assets/cloud_heavy rain_rain_weather_icon.png'
import cloud from '../Assets/cloud_weather_icon.png'
import hot_sun from '../Assets/hot_sun_weather_icon.png'
import humidity from '../Assets/humidity.png'
import wind from '../Assets/wind.png'

const WeatherApp = () => {
    let api_key = "cba1ebc72dd3c0730c5f614ab7fcc0ab";
    const [wicon, setWicon] = useState(cloud_icon);

    //  const search = async ()=>{
    //     const element = document.getElementsByClassName("cityInput")
    //     if (element[0].value === "") {
    //       return 0;}
    //       let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}London&units=Metric&appid=${api_key}`
    //       let response = await fetch(url);
    //       let data = await response.json();
    //       const humidityElement = document.getElementsByClassName("humidity_percent");
    //       const windElement = document.getElementsByClassName("wind-rate");
    //       const temperatureElement = document.getElementsByClassName("weather_temp");
    //       const locationElement = document.getElementsByClassName("weather_location");

    //       humidityElement[0].innerHTML = data.main.humidity + " %";
    //       windElement[0].innerHTML = data.wind.speed + " km/h";
    //       temperatureElement[0].innerHTML = data.main.temp + "&deg;C"; // Corrected temperature display
    //       locationElement[0].innerHTML = data.name;        
    //       console.log(data)   }       
    const search = async () => {
        const element = document.getElementsByClassName("cityInput");
        if (element[0].value === "") {
            return 0;
        }
    
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        let response = await fetch(url);
        let data = await response.json();
    
        if (data.main && data.wind && data.name) {
            const humidityElement = document.getElementsByClassName("humidity_percent");
            const windElement = document.getElementsByClassName("wind-rate");
            const temperatureElement = document.getElementsByClassName("weather_temp");
            const locationElement = document.getElementsByClassName("weather_location");
    
            humidityElement[0].innerHTML = data.main.humidity + " %";
            windElement[0].innerHTML = data.wind.speed + " km/h";
            temperatureElement[0].innerHTML = data.main.temp + "&deg;C";
            locationElement[0].innerHTML = data.name;
        } else {
            console.error("Error: Data is missing required properties.");
        }
        console.log(data);

        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
            setWicon(clear_icon)
          }
        else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
            setWicon(cloud_icon)
          }
        else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
            setWicon(cloud)
          }
       
        else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
            setWicon(heavy_rain_storm)
          }
        else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
            setWicon(heavy_rain_storm)
          }
        else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
            setWicon(cloud_winter)
          }
        else{
            setWicon(hot_sun)
          }        
    };

    
    

    return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder='search'/>
            <div className="search-icon" onClick={()=>{search()}}>
                <img src={search_icon} alt="search-icon" className='search_icon_pic'/>
            </div>
        </div>
        <div className="weather_img">
         <img id='clear' src={wicon} alt="img"/>
       </div>    
       <div className="weather_temp">
       24&deg;C
       </div>
       <div className="weather_location">London</div>
       <div className="data_container">
         <div className="element">
           <img src={humidity} alt="img" className='icon'/>
           <div className="data">
             <div className="humidity_percent">24%</div>
             <div className="text">Humidity</div>            
           </div>
         </div>
         <div className="element">
           <img src={wind} alt="img" className='icon'/>
           <div className="data">
             <div className="wind-rate">18 km/hr</div>
             <div className="text">Wind Speed</div>            
           </div>
         </div>
       </div>      
    </div>
  )
    }

export default WeatherApp
