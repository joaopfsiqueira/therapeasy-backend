import { Users } from '../../../domain/people/people.entity'
import { AuthBody } from '../../../domain/auth/auth.service'

export interface IAuthService {
    login(body: AuthBody): Promise<Users>
}
