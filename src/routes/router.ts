import { Router } from "express";
import CoordinatesController from "../controllers/CoordinatesController";
import CityController from "../controllers/CityController";
import WeatherController from "../controllers/WeatherController";
import TemperatureController from "../controllers/TemperatureController";
import FeelsLikeController from "../controllers/FeelsLikeController";
import ForecastController from "../controllers/ForecastController";
import ForecastDataController from "../controllers/ForecastDataController";
import { getWeatherByCity } from "../controllers/index.controller";


const router = Router();

// coord
const coordinatesController = new CoordinatesController();
router.post('/coords/', coordinatesController.create);
router.get('/coords/:id', coordinatesController.findById);

// city
const cityController = new CityController();
router.get('/cities/', cityController.findAll);
router.get('/cities/:id', cityController.findById);
router.post('/cities/', cityController.create);

// temperature
const temperatureController = new TemperatureController();
router.get('/temp/', temperatureController.findAll);
router.post('/temp/', temperatureController.create);

// FeelsLike
const feelsLikeController = new FeelsLikeController();
router.get('/feels-like/', feelsLikeController.findAll);
router.post('/feels-like/', feelsLikeController.create);

// weather
const weatherController = new WeatherController();
router.get('/weather/', weatherController.findAll);
router.get('/weather/:id', weatherController.findById);
router.post('/weather/', weatherController.create);

// list (forecast)
const forecastController = new ForecastController();
router.get('/list/', forecastController.findAll);
router.post('/list/', forecastController.create);

// forecastData
const forecastDataController = new ForecastDataController();
router.get('/forecast/', forecastDataController.findAll);
router.get('/forecast/:city', forecastDataController.findByCity);
router.post('/forecast/', forecastDataController.create);

//api.openweathermap.org
router.get('/open-weather/:city', getWeatherByCity);

export default router
