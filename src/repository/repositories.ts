import { DataSource, Repository } from 'typeorm'
import { People } from '../domain/people/people.entity'
import { IRepositories } from '../utils/interfaces/repository/repositories.interface'
import { Doctor } from 'src/domain/doctors/doctor.entity'
import { User } from 'src/domain/user/user.entity'

// single responsibility principle, essa classe instância e inicializa os repositórios
// Dependency Inversion, não tem, não depende de abstrações.
// Interface segregation, sim! Eu utilizo a IRepositories como representação de um contrato Repositories.
// Liskov Substitution, não tem. Não tenho classes herdadas que fazem o papel da repositores, embora eu possa fazer isso, preferi manter com atributos públicos para cada repository
// Open/closed principle, Não! Eu não posso adicionar novos repositórios sem precisar alterar essa classe. Teoricamente eu preciso adicionar um novo atributo.
class Repositories implements IRepositories {
    PeopleRepository: Repository<People>
    DoctorRepository: Repository<Doctor>
    UserRepository: Repository<User>

    constructor(DataSource: DataSource) {
        this.PeopleRepository = DataSource.getRepository(People)
        this.DoctorRepository = DataSource.getRepository(Doctor)
        this.UserRepository = DataSource.getRepository(User)
    }
}

export default Repositories
