import {CONFIG} from './config';
import axios from 'axios';

export class WeatherApi{
    static getCurrentWeatherData = async(cityName)=>{
        let url = CONFIG.WEATHER_API.replace('~',cityName);
        return await axios.get(url+CONFIG.WEATHER_API_KEY); //giving more spaces can cause error
    }
}