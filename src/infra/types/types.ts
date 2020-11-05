export interface ForecastData {
    city: City;
    cod: string;
    message: number;
    cnt: number;
    list: Forecast[];
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

export interface Forecast {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: Temperature;
    feels_like: FeelsLike;
    pressure: number;
    humidity: number;
    weather: Weather[];
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

export interface Temperature {
    day: number;
    min: number;
    max:   number;
    night: number;
    eve: number;
    morn: number;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}
