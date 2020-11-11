import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Forecast } from "../entity/Forecast";
import { ForecastService } from "../services/ForecastService";

export default class ForecastController {

  public findAll = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Forecast).find({
      relations: ["temp", "feels_like", "weather"],
    });
    return res.json(results);
  };

  public findById = async ( req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Forecast).findOne(req.params.id, {
      relations: ["temp", "feels_like", "weather"],
    });
    return res.json(results);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const { dt, sunrise, sunset, temp, feels_like, pressure, humidity, weather, speed, deg, clouds, pop } = req.body;
    const forecastService = new ForecastService();
    const newForecast = await forecastService.insert({ dt, sunrise, sunset, temp, feels_like, pressure, humidity, weather, speed, deg, clouds, pop });
    return res.status(201).json(newForecast);
  };
}
