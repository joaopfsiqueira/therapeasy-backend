import { IRepositories } from '../../utils/interfaces/repository/repositories.interface'
import { IUserService } from '../../utils/interfaces/people/people.service.interface'
import { Users } from './people.entity'
import * as bcrypt from 'bcrypt'

class UserService implements IUserService {
    constructor(private repositories: IRepositories) {}

    async create(body: Users): Promise<Users> {
        try {
            body.password = await bcrypt.hash(body.password, 8)
            return await this.repositories.UserRepository.save(body)
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error(String(error))
            }
        }
    }

    async getUserInformation(username: string): Promise<Users> {
        const user = await this.repositories.UserRepository.findOne({
            where: {
                username: username,
            },
        })

        if (!user) {
            throw new Error('Usuário não encontrado')
        }

        return user
    }
}

export default UserService
