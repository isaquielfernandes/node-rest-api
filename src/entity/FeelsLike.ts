import {Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('feels_like')
export class FeelsLike {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'numeric', precision: 10, scale: 2})
    day: number;

    @Column({type: 'numeric', precision: 10, scale: 2})
    night: number;

    @Column({type: 'numeric', precision: 10, scale: 2})
    eve: number;

    @Column({type: 'numeric', precision: 10, scale: 2})
    morn: number;

}
