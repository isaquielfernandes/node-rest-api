import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { FeelsLike } from "../entity/FeelsLike";

export default class FeelsLikeController {
  
  public findAll = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(FeelsLike).find();
    return res.json(results);
  };

  public findById = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(FeelsLike).findOne(req.params.id);
    return res.json(results);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const { day, night, eve, morn } = req.body;
    const feelsLike = new FeelsLike();
    feelsLike.day = parseFloat(day);
    feelsLike.night = parseFloat(night);
    feelsLike.eve = parseFloat(eve);
    feelsLike.morn = parseFloat(morn);
    const newFeelsLike = await getRepository(FeelsLike).create(feelsLike);
    const results = await getRepository(FeelsLike).save(newFeelsLike);
    return res.status(201).json(results);
  };
}
