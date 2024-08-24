import { IRepositories } from '../../utils/interfaces/repository/repositories.interface'
import { IPersonService } from '../../utils/interfaces/people/people.service.interface'
import { Person } from './person.entity'
import * as bcrypt from 'bcrypt'

class PersonService implements IPersonService {
    constructor(private repositories: IRepositories) {}

    async create(body: Person): Promise<Person> {
        try {
            // body.password = await bcrypt.hash(body.password, 8)
            return await this.repositories.PersonRepository.save(body)
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error(String(error))
            }
        }
    }

    async getUserInformation(cpf: string): Promise<Person> {
        const user = await this.repositories.PersonRepository.findOne({
            where: {
                cpf: cpf,
            },
        })

        if (!user) {
            throw new Error('Usuário não encontrado')
        }

        return user
    }
}

export default PersonService
