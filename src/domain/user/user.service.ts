import { IUserRepository } from '../../interfaces/user/user.repository.interface'
import { IUserService } from '../../interfaces/user/user.service.interface'
import { Users } from './user.entity'

class UserService implements IUserService {
    constructor(private userRepository: IUserRepository) {}

    async create(body: Users): Promise<Users> {
        try {
            return await this.userRepository.DataSource.save(body)
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
