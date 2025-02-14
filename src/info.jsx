import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WaterDropIcon from '@mui/icons-material/WaterDrop';


export default function InfoBox({wheaterinfo}) {
  const dust_image = "https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVzdHklMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";
  const cold_image = "https://plus.unsplash.com/premium_photo-1668792545129-72d876248c1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMGltYWdlfGVufDB8fDB8fHww";
  const hot_image = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdCUyMHN1biUyMHN1bW1hcnxlbnwwfHwwfHx8MA%3D%3D";
  const rain_image = "https://images.unsplash.com/photo-1462040700793-fcd2dbc0edf0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhaW55fGVufDB8fDB8fHww";
  const snow_image = "https://plus.unsplash.com/premium_photo-1663090593977-9923cc536f3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c25vd3xlbnwwfHwwfHx8MA%3D%3D";
  const thunderstorm_image = "https://plus.unsplash.com/premium_photo-1726818265070-c08eb719d77c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGh1bmRlcnN0b3JtX2ltYWdlfGVufDB8fDB8fHww";
  return (
    <div  style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <Card ssx={{ maxWidth: 400, boxShadow: 3, borderRadius: "16px", textAlign: "center" }}>
        <CardMedia
          sx={{ height: 140 }}
          image={wheaterinfo.humidity > 80 ? dust_image : wheaterinfo.temp < 10 ? cold_image : wheaterinfo.temp > 20 ? hot_image : wheaterinfo.weather === "Rain" ? rain_image : wheaterinfo.weather === "Snow" ? snow_image : wheaterinfo.weather === "Thunderstorm" ? thunderstorm_image : "https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVzdHklMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold" }}>
            {wheaterinfo.city} {thunderstorm_image ? <ThunderstormIcon /> : wheaterinfo.weather === "Rain" ? <WaterDropIcon /> : wheaterinfo.weather === "Snow" ? <AcUnitIcon /> : wheaterinfo.temp > 20 ? <WbSunnyIcon /> : <AcUnitIcon />}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <div>Temperature: {wheaterinfo.temp}</div>
            <div>Min Temperature: {wheaterinfo.tempMin}</div>
            <div>Max Temperature: {wheaterinfo.tempMax}</div>
            <div>Feels Like: {wheaterinfo.feel_like}</div>
            <div>Humidity: {wheaterinfo.humidity}</div>
            <div>Pressure: {wheaterinfo.pressure}</div>
            <div>Wind: {wheaterinfo.wind}</div>
            <div>City: {wheaterinfo.city}</div>
            <div>Country: {wheaterinfo.country}</div>
            <div>Weather: {wheaterinfo.weather}</div>
            <div>Description: {wheaterinfo.description}</div>

          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
