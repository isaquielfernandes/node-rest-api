import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { List } from "./List.js";

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

    @ManyToOne(() => List, l => l.weather)
    list: List;
}