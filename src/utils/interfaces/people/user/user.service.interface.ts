import { User } from 'src/domain/people/user/user.entity'

export interface IUserService {
    create(body: User): Promise<User>
}
