import { Request, Response } from "express";
import { TemperatureService } from "../services/TemperatureService";

export default class TemperatureController {

  public findAll = async (req: Request, res: Response): Promise<Response> => {
    const temperatureService = new TemperatureService();
    const temp = await temperatureService.findAll();
    return res.status(200).json(temp);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const { day, min, max, night, eve, morn } = req.body;
    const temperatureService = new TemperatureService();
    const temperature = await temperatureService.insert({ day, min, max, night, eve, morn })
    return res.status(201).json(temperature);
  };

}
