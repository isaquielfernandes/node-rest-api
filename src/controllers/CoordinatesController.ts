import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Coord } from "../entity/Coord";

export default class CoordinatesController {
  
  public findById = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Coord).findOne(req.params.id);
    return res.json(results);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const { lon, lat } = req.body;
    const coord = new Coord();
    coord.lon = parseFloat(lon);
    coord.lat = parseFloat(lat);
    const newCoord = await getRepository(Coord).create(coord);
    const results = await getRepository(Coord).save(newCoord);
    return res.status(201).json(results);
  };

  public update = async (req: Request, res: Response): Promise<Response> => {
    const coord = await getRepository(Coord).findOne(req.params.id);
    if (coord) {
      getRepository(Coord).merge(coord, req.body);
      const results = await getRepository(Coord).save(coord);
      return res.json(results);
    }

    return res.json({ msg: "Not Coord found" });
  };

  public delete = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Coord).delete(req.params.id);
    return res.json(results);
  };
}
