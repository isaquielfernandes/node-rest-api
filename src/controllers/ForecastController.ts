import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { List } from "../entity/List";

export default class ForecastController {
  public findAll = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(List).find({
      relations: ["temp", "feels_like", "weather"],
    });
    return res.json(results);
  };

  public getListById = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const results = await getRepository(List).findOne(req.params.id, {
      relations: ["temp", "feels_like", "weather"],
    });
    return res.json(results);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const {
      dt,
      sunrise,
      sunset,
      pressure,
      humidity,
      deg,
      speed,
      eve,
      pop,
    } = req.body;
    const list = new List();
    list.dt = parseFloat(dt);
    list.sunrise = parseFloat(sunrise);
    list.sunset = parseFloat(sunset);
    list.pressure = parseFloat(pressure);
    list.humidity = parseFloat(humidity);
    list.speed = parseFloat(speed);
    list.deg = parseFloat(deg);
    list.clouds = parseFloat(eve);
    list.pop = parseFloat(pop);
    const newForecast = await getRepository(List).create(list);
    const results = await getRepository(List).save(newForecast);
    return res.status(201).json(results);
  };
}
