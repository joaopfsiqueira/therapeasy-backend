import { DataSource, Repository } from 'typeorm'
import { Users } from '../domain/user/user.entity'
import { IRepositories } from '../utils/interfaces/repository/repositories.interface'

// single responsibility principle, essa classe instância e inicializa os repositórios
// Dependency Inversion, não tem, não depende de abstrações.
// Interface segregation, sim! Eu utilizo a IRepositories como representação de um contrato Repositories.
// Liskov Substitution, não tem. Não tenho classes herdadas que fazem o papel da repositores, embora eu possa fazer isso, preferi manter com atributos públicos para cada repository
// Open/closed principle, Não! Eu não posso adicionar novos repositórios sem precisar alterar essa classe. Teoricamente eu preciso adicionar um novo atributo.
class Repositories implements IRepositories {
    UserRepository: Repository<Users>

    constructor(DataSource: DataSource) {
        this.UserRepository = DataSource.getRepository(Users)
    }
}

export default Repositories
