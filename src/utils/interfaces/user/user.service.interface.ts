import { User } from 'src/domain/user/user.entity'

export interface IUserService {
    create(body: User): Promise<User>
}
