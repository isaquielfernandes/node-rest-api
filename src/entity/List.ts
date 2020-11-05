import {Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn} from "typeorm";
import {Temp} from "./Temp.js";
import {FeelsLike} from "./FeelsLike.js";
import {Weather} from "./Weather.js";

@Entity('list')
export class List {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dt: number;

    @Column()
    sunrise: number;

    @Column()
    sunset: number;

    @OneToOne(type => Temp)
    @JoinColumn()
    temp: Temp;

    @OneToOne(type => FeelsLike)
    @JoinColumn()
    feels_like: FeelsLike;

    @Column({type: 'numeric', precision: 10, scale: 2})
    pressure: number;

    @Column({type: 'numeric', precision: 10, scale: 2})
    humidity: number;

    @OneToMany(() => Weather, weather => weather.list)
    weather: Weather[];

    @Column({type: 'numeric', precision: 10, scale: 2})
    speed: number;

    @Column({type: 'numeric', precision: 10, scale: 2})
    deg: number;

    @Column({type: 'numeric', precision: 10, scale: 2})
    clouds: number;

    @Column({type: 'numeric', precision: 10, scale: 2})
    pop: number;

}