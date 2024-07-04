import 'reflect-metadata' // serve para atualizar os metadados da tabela.
import { DataSource } from 'typeorm'
import { People } from './domain/people/people.entity'
import { Doctor } from './domain/doctors/doctor.entity'
import { User } from './domain/user/user.entity'

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
            entities: [People, Doctor, User],
            migrations: [],
            subscribers: [],
        })
    }
}

export default AppDataSource
