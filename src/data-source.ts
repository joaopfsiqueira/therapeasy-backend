import 'reflect-metadata' // serve para atualizar os metadados da tabela.
import { DataSource } from 'typeorm'
import { Person } from './domain/people/person/person.entity'
import { Doctor } from './domain/people/doctors/doctor.entity'
import { User } from './domain/people/user/user.entity'
import { Patient } from './domain/people/patients/patient.entity'

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
            entities: [Person, Doctor, User, Patient],
            migrations: [],
            subscribers: [],
        })
    }
}

export default AppDataSource
