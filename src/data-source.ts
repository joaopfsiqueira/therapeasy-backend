import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Users } from './domain/user/user.entity'

class AppDataSource {
    DataSource: DataSource

    constructor() {
        this.DataSource = new DataSource({
            type: 'mysql',
            host: process.env.DS_HOST,
            port: 3306,
            username: process.env.DS_USERNAME,
            password: process.env.DS_PASSWORD,
            database: process.env.DS_DATABASE,
            synchronize: true,
            logging: false,
            entities: [Users],
            migrations: [],
            subscribers: [],
        })
    }
}

export default AppDataSource
