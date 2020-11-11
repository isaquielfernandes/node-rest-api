import { getRepository, Repository } from "typeorm";
import { FeelsLike } from "../entity/FeelsLike";
import { Forecast } from "../entity/Forecast";
import Temperature from "../entity/Temperature";
import { Weather } from "../entity/Weather";

interface IRequest {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: ITemperature;
    feels_like: IFeelsLike;
    pressure: number;
    humidity: number;
    weather: IWeather[];
    speed: number;
    deg: number;
    clouds: number;
    pop: number;
}

interface ITemperature {
    id: number;
}

interface IFeelsLike {
    id: number;
}

interface IWeather {
    id: number;
}

export class ForecastService {

    private temperatureRepository: Repository<Temperature>;
    private feelsLikeRepository: Repository<FeelsLike>;
    private weatherRepository: Repository<Weather>;
    private forecastRepository: Repository<Forecast>;

    constructor() {
        this.temperatureRepository = getRepository(Temperature);
        this.feelsLikeRepository = getRepository(FeelsLike);
        this.weatherRepository = getRepository(Weather);
        this.forecastRepository = getRepository(Forecast);
    }

    public async findAll(): Promise<Forecast[]> {
        const forecast = await this.forecastRepository.find();
        return forecast;
    }

    public async insert({ dt, sunrise, sunset, temp, feels_like, pressure, humidity, weather, speed, deg, clouds, pop }: IRequest): Promise<Forecast> {

        const temperature = await this.temperatureRepository.findOne(temp.id);
        const feelsLike = await this.feelsLikeRepository.findOne(feels_like.id);
        const weatherIds = weather.map((weather) => {
            return { id: weather.id };
        });
        const weatherData = await this.weatherRepository.findByIds(weatherIds);
        const weatherMap = weatherData.map((weatherData) => {
            return {
                id: weatherData.id,
            };
        });

        const createForecast = this.forecastRepository.create(
            {
                dt,
                sunrise,
                sunset,
                temp: temperature,
                feels_like: feelsLike,
                pressure,
                humidity,
                weather: weatherMap,
                speed,
                deg,
                clouds,
                pop,
            }
        );
        const forecastData = await this.forecastRepository.save(createForecast);
        return forecastData;
    }

}