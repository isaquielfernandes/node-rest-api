import {EntityManager, EntityRepository } from "typeorm";
import { City } from "../entity/City";
import { WeatherData } from "../entity/WeatherData";

@EntityRepository()
export class WeatherDataRepository {

    constructor(private manager: EntityManager) {
    }

    findByCityName(city: City) {
        return this.manager.findOne(WeatherData, { city }, { 
            relations: ["city", "city.coord", "list", "list.temp", "list.feels_like", "list.weather"] 
        });
    }

}
