import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne, JoinTable} from "typeorm";
import {City} from "./City.js";
import {List} from "./List.js";

@Entity()
export class WeatherData {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => City, city => city.weatherData)
    city: City;

    @Column()
    cod: string;

    @Column({type: 'numeric', precision: 10, scale: 7})
    message: number;

    @Column({type: 'numeric'})
    cnt: number;

    @ManyToMany(type => List, {
        cascade: true
    })
    @JoinTable()
    list: List[];
}