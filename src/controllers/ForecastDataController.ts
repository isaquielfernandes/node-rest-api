import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { WeatherData } from "../entity/WeatherData";

export default class ForecastDataController {

  public findAll = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(WeatherData).find({
      relations: [
        "city",
        "city.coord",
        "list",
        "list.temp",
        "list.feels_like",
        "list.weather",
      ],
    });
    return res.json(results);
  };

  public findByCity = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const results = await getRepository(WeatherData)
      .createQueryBuilder("forecast")
      .innerJoinAndSelect("forecast.city", "city")
      .innerJoinAndSelect("city.coord", "coord")
      .innerJoinAndSelect("forecast.list", "list")
      .innerJoinAndSelect("list.temp", "temp")
      .innerJoinAndSelect("list.feels_like", "feels_like")
      .innerJoinAndSelect("list.weather", "weather")
      .select([
        "city.name",
        "city.country",
        "city.population",
        "city.timezone",
        "coord.lon",
        "coord.lat",
        "forecast.cod",
        "forecast.message",
        "forecast.cnt",
        "list.dt",
        "list.sunrise",
        "list.sunset",
        "temp.day",
        "temp.min",
        "temp.max",
        "temp.night",
        "temp.eve",
        "temp.morn",
        "feels_like.day",
        "feels_like.night",
        "feels_like.eve",
        "feels_like.morn",
        "list.pressure",
        "list.humidity",
        "weather",
        "list.speed",
        "list.deg",
        "list.clouds",
        "list.pop",
      ])

      .where("city.name = :city", { city: req.params.city })
      .getOne();
    return res.json(results);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const newWeatherData = await getRepository(WeatherData).create(req.body);
    const results = await getRepository(WeatherData).save(newWeatherData);
    return res.status(201).json(results);
  };
}
