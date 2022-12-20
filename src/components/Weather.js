import axios from 'axios';
import React , {useState, useEffect} from 'react'
import { WeatherContainer, Temp, City } from './WeatherStyles';


const url = 'https://api.openweathermap.org/data/2.5/weather?q=ahmedabad&units=imperial&appid=4d935618dd973571b82ae0380170655b'

function Weather() {
    const [data, setData] = useState(null);

    useEffect(()=>{
        axios.get(url).then((res)=> setData(res.data)).catch((err)=> console.log(err))
    },[])
    // console.log(data)

    if(!data) return null;
  return (
    <WeatherContainer>
      <Temp>{data.main.temp.toFixed(0)}&#176;</Temp>
      <City>Ahmedabad</City>
    </WeatherContainer>
  )
}

export default Weather
