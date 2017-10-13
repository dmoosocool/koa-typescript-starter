import {
    Table,
    Model,
    PrimaryKey,
    Column,
    AutoIncrement,
    DefaultScope
} from 'sequelize-typescript';

@DefaultScope({
    attributes: ['id', 'name']
})

@Table
export class testUser extends Model<testUser> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    name: string;

    @Column({
        field: 'secretKey'
    })
    secret: string;

    @Column
    password: string;
}