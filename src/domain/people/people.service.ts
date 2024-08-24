import { IRepositories } from '../../utils/interfaces/repository/repositories.interface'
import { IPeopleService } from '../../utils/interfaces/people/people.service.interface'
import { People } from './people.entity'
import * as bcrypt from 'bcrypt'

class PeopleService implements IPeopleService {
    constructor(private repositories: IRepositories) {}

    async create(body: People): Promise<People> {
        try {
            // body.password = await bcrypt.hash(body.password, 8)
            return await this.repositories.PeopleRepository.save(body)
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error(String(error))
            }
        }
    }

    async getUserInformation(cpf: string): Promise<People> {
        const user = await this.repositories.PeopleRepository.findOne({
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

export default PeopleService
