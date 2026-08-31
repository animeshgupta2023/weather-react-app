import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox"; 
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Loading...",
        temp: 0,
        tempMin: 0,
        tempMax: 0,
        humidity: 0, 
        feelsLike: 0,
        weather: "fetching data",
    });

    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={setWeatherInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}