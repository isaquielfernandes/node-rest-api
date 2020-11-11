import { getRepository, Repository } from "typeorm";
import Temperature from "../entity/Temperature";

interface IRequest {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
}

export class TemperatureService {

    private temperatureRepository: Repository<Temperature>;

    constructor () {
        this.temperatureRepository = getRepository(Temperature);
    }

    public async findAll(): Promise<Temperature[]>{
        const temp = await this.temperatureRepository.find();
        return temp;
    }

    public async insert({ day, min, max, night, eve, morn }: IRequest): Promise<Temperature> {
        const newTemp = this.temperatureRepository.create(
            { day, min, max, night, eve, morn }
        );
        const temperature = await this.temperatureRepository.save(newTemp);
        return temperature;
    }

}