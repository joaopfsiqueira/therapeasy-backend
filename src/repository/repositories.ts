import { DataSource, Repository } from 'typeorm'
import { Person } from '../domain/people/person/person.entity'
import { IRepositories } from '../utils/interfaces/repository/repositories.interface'
import { Doctor } from 'src/domain/people/doctors/doctor.entity'
import { User } from 'src/domain/people/user/user.entity'
import { Patient } from 'src/domain/people/patients/patient.entity'
import { Questionnaire } from 'src/domain/questions/questionnaire/questionnaire.entity'

// single responsibility principle, essa classe instância e inicializa os repositórios
// Dependency Inversion, não tem, não depende de abstrações.
// Interface segregation, sim! Eu utilizo a IRepositories como representação de um contrato Repositories.
// Liskov Substitution, não tem. Não tenho classes herdadas que fazem o papel da repositores, embora eu possa fazer isso, preferi manter com atributos públicos para cada repository
// Open/closed principle, Não! Eu não posso adicionar novos repositórios sem precisar alterar essa classe. Teoricamente eu preciso adicionar um novo atributo.
class Repositories implements IRepositories {
    PersonRepository: Repository<Person>
    DoctorRepository: Repository<Doctor>
    UserRepository: Repository<User>
    PatientRepository: Repository<Patient>
    QuestionnaireRepository: Repository<Questionnaire>

    constructor(DataSource: DataSource) {
        this.PersonRepository = DataSource.getRepository(Person)
        this.DoctorRepository = DataSource.getRepository(Doctor)
        this.UserRepository = DataSource.getRepository(User)
        this.PatientRepository = DataSource.getRepository(Patient)
        this.QuestionnaireRepository = DataSource.getRepository(Questionnaire)
    }
}

export default Repositories
