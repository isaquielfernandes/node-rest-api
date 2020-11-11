import { getRepository, Repository } from "typeorm";
import { FeelsLike } from "../entity/FeelsLike";

interface IRequest {
    day: number;
    night: number;
    eve: number;
    morn: number;
}

interface IParam {
    id: number;
}

export class FeelsLikeService {

    private feelsLikeRepository: Repository<FeelsLike>;

    constructor () {
        this.feelsLikeRepository = getRepository(FeelsLike);
    }

    public async findAll(): Promise<FeelsLike[]>{
        const feelsLike = await this.feelsLikeRepository.find();
        return feelsLike;
    }

    public async findById({ id }: IParam): Promise<FeelsLike | undefined>{
        const feelsLike = await this.feelsLikeRepository.findOne(id);
        return feelsLike;
    }

    public async insert({ day, night, eve, morn }: IRequest): Promise<FeelsLike> {
        const newFeelsLike = this.feelsLikeRepository.create(
            { day, night, eve, morn }
        );
        const feelsLike = await this.feelsLikeRepository.save(newFeelsLike);
        return feelsLike;
    }

}