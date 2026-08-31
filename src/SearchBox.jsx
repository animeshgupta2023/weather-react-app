import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useEffect, useState } from 'react';

export default function SearchBox({updateInfo}){ 
    let [city, setCity] = useState("delhi");
    let [error, setError] = useState(false);
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    // ?q={city name},{state code},{country code}&limit={limit}&appid={API key}
    const API_KEY = import.meta.env.VITE_API_KEY;

    let getWeatherInformation = async ()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)

            if (!response.ok) {
                throw new Error("City not found");
            }

            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            return result;
        } catch(err){
            throw(err);
        }
    };

    let handleChange = (event)=>{
        setCity(event.target.value);
    }

    let handleSubmit = async (event)=>{
        try{
            event.preventDefault();
            let newInfo = await getWeatherInformation();
            updateInfo(newInfo);
            setError(false); 
            setCity("");
        } catch(err){
            setError(true);
        }
    };

    useEffect(()=>{
        getWeatherInformation()
            .then((data)=>{
                updateInfo(data);
            })
            .catch((err)=>{
                console.error("failed to fetch default weather: ", err);
            });
    }, []);

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required/>
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
                {error && <p style={{color: "red"}}>No such place in our api</p>}
            </form>
        </div>
    );
} 