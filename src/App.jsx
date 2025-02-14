import { useState } from 'react'
import './App.css'
import InfoBox from './info'
import SearchBox from './searchBox'

function App() {
  const [Info, setInfo] = useState({
    temp: 23.5,
    tempMin: 21.5,
    tempMax: 25.5,
    feel_like: 24.5,
    humidity: 50,
    pressure: 1000,
    wind: 5,
    city: "London",
    country: "pakistan",
    weather: "Clouds",
    description: "scattered clouds",
  });

  const updateInfo = (data)=> {
   setInfo(data)
  }

  return (
    <>
     <h1>Weather APP</h1>
     <SearchBox updatewheater={updateInfo} />
     <InfoBox wheaterinfo={Info}/>
    </>
  )
}

export default App
