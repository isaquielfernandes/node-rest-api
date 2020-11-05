import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { City } from "../entity/City";

export default class CityController {

  public findAll = async (req: Request, res: Response): Promise<Response> => {
    const cities = await getRepository(City).find({ relations: ["coord"] });
    return res.json(cities);
  };
  
  public findById = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(City).findOne(req.params.id, { relations: ["coord"] });
    return res.json(results);
  };
  
  public findByName = async (req: Request, res: Response): Promise<Response> => {
    const name: string = req.params.name;
    const results = await getRepository(City).findOne(name, { relations: ["coord"] });
    return res.json(results);
  };
  
  public create = async (req: Request, res: Response): Promise<Response> => {
    const newCity = await getRepository(City).create(req.body);
    const results = await getRepository(City).save(newCity);
    return res.json(results);
  };
  
  public update = async (req: Request, res: Response): Promise<Response> => {
    const city = await getRepository(City).findOne(req.params.id);
    if (city) {
      getRepository(City).merge(city, req.body);
      const results = await getRepository(City).save(city);
      return res.json(results);
    }
  
    return res.json({msg: 'Not City found'});
  };
  
  public delete = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(City).delete(req.params.id);
    return res.json(results);
  };
}

