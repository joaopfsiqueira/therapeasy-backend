import { IRepositories } from '../../interfaces/repository/repositories.interface'
import { IUserService } from '../../interfaces/user/user.service.interface'
import { Users } from './user.entity'
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
}

export default UserService
