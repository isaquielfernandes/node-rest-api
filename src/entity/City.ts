import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn } from "typeorm";
import { Coord } from "./Coord";
import { WeatherData } from "./WeatherData";

@Entity('city')
export class City {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(type => Coord, {
        cascade: true,
    })
    @JoinColumn()
    coord: Coord;

    @Column()
    country: string;

    @Column()
    population: number;

    @Column()
    timezone: number;

    @OneToMany(() => WeatherData, weatherData => weatherData.city,{
        cascade: true,
    })
    weatherData: WeatherData[];
}