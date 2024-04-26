import { Users } from '../../../domain/user/user.entity'
import { Repository } from 'typeorm'

export interface IRepositories {
    UserRepository: Repository<Users>
}
