import { Request, Response } from "express";
import axios from "axios";


export const getWeatherByCity = async (req: Request, res: Response) => {
    const city = req.params.city
    const WEATHER_KEY = 'dbbba0c850630abd14833e4ca84fad23'
    const API_URL = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&appid=${WEATHER_KEY}&units=metric`;
    const response = await axios.get(API_URL);
    const data = response;
    console.log(data)
    res.json(data.data)
}
