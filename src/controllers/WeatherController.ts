import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Weather } from "../entity/Weather";

export default class WeatherController {

  public findAll = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Weather).find();
    return res.json(results);
  };

  public findById = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Weather).findOne(req.params.id);
    return res.json(results);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const newWeather = await getRepository(Weather).create(req.body);
    const results = await getRepository(Weather).save(newWeather);
    return res.status(201).json(results);
  };
}
