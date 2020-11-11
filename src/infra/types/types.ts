export interface ForecastData {
    city: City;
    cod: string;
    message: number;
    cnt: number;
    list: IForecast[];
}

export interface City {
    name: string;
    coord: Coord;
    country: string;
    population: number;
    timezone: number;
}

export interface Coord {
    lon: number;
    lat: number;
}

export interface IForecast {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: ITemperature;
    feels_like: FeelsLike;
    pressure: number;
    humidity: number;
    weather: IWeather[];
    speed: number;
    deg: number;
    clouds: number;
    pop: number;
}

export interface FeelsLike {
    day: number;
    night: number;
    eve: number;
    morn: number;
}

export interface ITemperature {
    day: number;
    min: number;
    max:   number;
    night: number;
    eve: number;
    morn: number;
}

export interface IWeather {
    id: number;
    main: string;
    description: string;
    icon: string;
}
