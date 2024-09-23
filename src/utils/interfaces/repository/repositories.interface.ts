import { User } from 'src/domain/people/user/user.entity'
import { Doctor } from 'src/domain/people/doctors/doctor.entity'
import { Person } from 'src/domain/people/person/person.entity'
import { Patient } from 'src/domain/people/patients/patient.entity'
import { Repository } from 'typeorm'
import { Questionnaire } from 'src/domain/questions/questionnaire/questionnaire.entity'
import { Topic } from 'src/domain/questions/topic/topic.entity'

export interface IRepositories {
    PersonRepository: Repository<Person>
    DoctorRepository: Repository<Doctor>
    UserRepository: Repository<User>
    PatientRepository: Repository<Patient>
    QuestionnaireRepository: Repository<Questionnaire>
    TopicRepository: Repository<Topic>
}
