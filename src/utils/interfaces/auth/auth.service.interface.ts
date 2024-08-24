import { User } from '../../../domain/people/user/user.entity'
import { AuthBody } from '../../../domain/auth/auth.service'

export interface IAuthService {
    login(body: AuthBody): Promise<User>
}
