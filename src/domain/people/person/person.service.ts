import { IRepositories } from 'src/utils/interfaces/repository/repositories.interface'
import { IPersonService } from 'src/utils/interfaces/people/people.service.interface'
import { Person } from './person.entity'

class PersonService implements IPersonService {
    constructor(private repositories: IRepositories) {}

    async create(body: Person): Promise<Person> {
        try {
            return await this.repositories.PersonRepository.save(body)
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error(String(error))
            }
        }
    }

    async getUserInformation(login: string): Promise<Person> {
        const user = await this.repositories.UserRepository.findOne({
            where: { login },
            relations: ['id_person'], // Carregar a relação com a pessoa
        })

        if (!user) {
            throw new Error('Usuário não encontrado')
        }

        if (user && user.id_person) {
            const person = await this.repositories.PersonRepository.findOne({
                where: { id: user.id_person },
            })

            if (!person) {
                throw new Error('Pessoa não encontrada')
            }
            return person // Retornar os dados da pessoa
        }
        throw new Error('Erro ao buscar informações do usuário')
    }
}

export default PersonService
