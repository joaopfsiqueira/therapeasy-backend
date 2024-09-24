import 'reflect-metadata' // serve para atualizar os metadados da tabela.
import { DataSource } from 'typeorm'
import { Person } from './domain/people/person/person.entity'
import { Doctor } from './domain/people/doctors/doctor.entity'
import { User } from './domain/people/user/user.entity'
import { Patient } from './domain/people/patients/patient.entity'
import { Questionnaire } from './domain/questions/questionnaire/questionnaire.entity'
import { Topic } from './domain/questions/topic/topic.entity'
import { Question } from './domain/questions/question/question.entity'
import { OptionAnswer } from './domain/questions/optionAnswer/optionAnswer.entity'
import { PatientTopic } from './domain/questions/patientTopic/patientTopic.entity'
import { QuestionTopic } from './domain/questions/questionTopic/questionTopic.entity'

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
            entities: [Person, User, Questionnaire, Topic, Doctor, Patient, Question, OptionAnswer, PatientTopic, QuestionTopic],
            migrations: [],
            subscribers: [],
        })
    }
}

export default AppDataSource
