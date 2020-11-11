import { Request, Response } from "express";
import { FeelsLikeService } from "../services/FeelsLikeService";

export default class FeelsLikeController {
  
  public findAll = async (req: Request, res: Response): Promise<Response> => {
    const feelsLikeService = new FeelsLikeService();
    const results = await feelsLikeService.findAll();
    return res.json(results);
  };

  public findById = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const feelsLikeService = new FeelsLikeService();
    const feelsLike = await feelsLikeService.findById({ id });
    return res.json(feelsLike);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const { day, night, eve, morn } = req.body;
    const feelsLikeService = new FeelsLikeService();
    const feelsLike = await feelsLikeService.insert({ day, night, eve, morn });
    return res.status(201).json(feelsLike);
  };
}
