import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Temp {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'numeric', precision: 10, scale: 2})
    day: number;

    @Column({type: 'numeric', precision: 10, scale: 2})
    min: number;

    @Column({type: 'numeric', precision: 10, scale: 2})
    max: number;

    @Column({type: 'numeric', precision: 10, scale: 2})
    night: number;

    @Column({type: 'numeric', precision: 10, scale: 2})
    eve: number;

    @Column({type: 'numeric', precision: 10, scale: 2})
    morn: number;
}