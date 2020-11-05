import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Coord {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'numeric', precision: 10, scale: 4})
    lon: number;

    @Column({type: 'numeric', precision: 10, scale: 4})
    lat: number;
}