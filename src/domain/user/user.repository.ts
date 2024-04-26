import { DataSource, Repository } from 'typeorm'
import { Users } from './user.entity'
import { IUserRepository } from '../../interfaces/user/user.repository.interface'

class UserRepository implements IUserRepository {
    DataSource: Repository<Users>

    constructor(DataSource: DataSource) {
        this.DataSource = DataSource.getRepository(Users)
    }
}

export default UserRepository
