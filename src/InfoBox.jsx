import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit'; 

export default function InfoBox({info}){
    const INIT_URL = 
    "https://images.unsplash.com/photo-1621260938401-7bdad0aec8fd?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let COLD_URL = 
    "https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHNlYXNvbnxlbnwwfHwwfHx8MA%3D%3D";
    let HOT_URL = 
    "https://images.unsplash.com/photo-1601674213739-a76b845ec04d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAINY_URL = 
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.city !== "Loading..."? (info.humidity > 80? RAINY_URL: (info.temp > 15? HOT_URL: COLD_URL)): INIT_URL}
                        title="city image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city.toUpperCase()} {info.humidity > 80 ? <ThunderstormIcon/>: (info.temp > 15? <WbSunnyIcon/>: <AcUnitIcon/>)}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                            <p>Temperature: {info.temp}&deg;</p>
                            <p>Humidity: {info.humidity}</p>
                            <p>Min Temperature: {info.tempMin}</p>
                            <p>Max Temperature: {info.tempMax}</p>
                            {info.city !== "Loading..." ? <p>The weather can be described as {info.weather} feels like {info.feelsLike}&deg;</p>:null}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );  
}  