import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ updatewheater }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_KEY = "678b4b63a2944a97ed3f2353eda5fc05";
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  const getWeather = async () => {
    try {
      let resp = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResp = await resp.json();
      let result = {
        temp: jsonResp.main.temp,
        tempMin: jsonResp.main.temp_min,
        tempMax: jsonResp.main.temp_max,
        feel_like: jsonResp.main.feels_like,
        humidity: jsonResp.main.humidity,
        pressure: jsonResp.main.pressure,
        wind: jsonResp.wind.speed,
        city: jsonResp.name,
        country: jsonResp.sys.country,
        weather: jsonResp.weather[0].main,
        description: jsonResp.weather[0].description,
      };
      return result;
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setCity("");
      let newValue = await getWeather();
      updatewheater(newValue);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <TextField
          id="city"
          label="Enter City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          sx={{ mb: 2, width: "300px" }}
        />
        <br />
        <Button
          variant="contained"
          type="submit"
          sx={{ width: "150px", backgroundColor: "#1976d2" }}
        >
          Search
        </Button>
        {error && (
          <p style={{ color: "red", marginTop: "10px" }}>
            No such place exists!
          </p>
        )}
      </form>
    </div>
  );
}
