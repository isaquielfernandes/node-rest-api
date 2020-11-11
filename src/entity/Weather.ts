import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Forecast } from "./Forecast";

@Entity('weather')
export class Weather {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    main: string;

    @Column()
    description: string;

    @Column()
    icon: string;

    @ManyToOne(() => Forecast, forecast => forecast.weather)
    list: Forecast;
}