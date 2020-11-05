import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Temp } from "../entity/Temp";

export default class TemperatureController {
  
  public findAll = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Temp).find();
    return res.json(results);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const { day, min, max, night, eve, morn } = req.body;
    const temp = new Temp();
    temp.day = parseFloat(day);
    temp.min = parseFloat(min);
    temp.max = parseFloat(max);
    temp.night = parseFloat(night);
    temp.eve = parseFloat(eve);
    temp.morn = parseFloat(morn);
    const newTemp = await getRepository(Temp).create(temp);
    const results = await getRepository(Temp).save(newTemp);
    return res.status(201).json(results);
  };
}
